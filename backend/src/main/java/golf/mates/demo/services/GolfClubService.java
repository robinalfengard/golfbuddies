package golf.mates.demo.services;

import golf.mates.demo.entities.GolfClub;
import golf.mates.demo.repositories.GolfClubRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class GolfClubService {

    private final GolfClubRepository golfClubRepository;


    public List<GolfClub> getAllGolfClubs() {
        return golfClubRepository.findAll();
    }


    public List<GolfClub> findGolClubByLocationId(Long locationId) {
        List<GolfClub> golfClubs = golfClubRepository.findByLocation_Id(locationId);
        if (!golfClubs.isEmpty()) {
            return golfClubs;
        } else {
            throw new EntityNotFoundException();
        }
    }

}
