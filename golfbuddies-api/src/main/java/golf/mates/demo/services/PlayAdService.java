package golf.mates.demo.services;

import golf.mates.demo.dtos.request.PlayAdRegistrationDto;
import golf.mates.demo.entities.PlayAd;
import golf.mates.demo.repositories.GolfClubRepository;
import golf.mates.demo.repositories.PlayAdRepository;
import golf.mates.demo.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class PlayAdService {

    private final UserRepository userRepository;

    private final PlayAdRepository playAdRepository;
    private final GolfClubRepository golfClubRepository;


    public void registerNewAd(PlayAdRegistrationDto playAdRegistrationDto) {
        playAdRepository.save(createPlayAd(playAdRegistrationDto));
    }

    public List<PlayAd> getAllAds() {
        return playAdRepository.findAll();
    }


    public void bookPlayer(String username, Long id) {
        PlayAd playad = playAdRepository.findById(id).get();
        updatePlayers(playad, username);
    }

    public PlayAd createPlayAd(PlayAdRegistrationDto playAdRegistrationDto) {
        PlayAd playad = new PlayAd(playAdRegistrationDto);
        updatePlayers(playad,playAdRegistrationDto.getUsername());
        return playad;
    }

    public void updatePlayers(PlayAd playad, String username) {
        Set<String> players = playad.getPlayers();
        if (players.size() < 4) {
            players.add(username + " (Kön: " + userRepository.findByUsernameIgnoreCase(username).get().getSex() + " HCP: " + userRepository.findByUsernameIgnoreCase(username).get().getHandicap() + ")");
            playad.setEmptySlots(playad.getEmptySlots() - 1);
            playad.setPlayers(players);
        }
        playAdRepository.save(playad);

    }

}

