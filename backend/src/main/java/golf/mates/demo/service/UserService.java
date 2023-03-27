package golf.mates.demo.service;


import golf.mates.demo.dtos.request.UserRegistrationDto;
import golf.mates.demo.entities.User;
import golf.mates.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    private User mapUserDtoToUser(UserRegistrationDto userRegistrationDto) {
        User user = new User(userRegistrationDto);
        user.setPassword(user.getPassword());
        return user;
    }

    public void registerNewUser(UserRegistrationDto userRegistrationDto) {
        userRepository.save(mapUserDtoToUser(userRegistrationDto));
    }

}
