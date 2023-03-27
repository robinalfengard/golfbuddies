package golf.mates.demo.service;


import golf.mates.demo.dtos.UserDto;
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

    private User mapUserDtoToUser(UserDto userDto) {
        User user = new User(userDto);
        user.setPassword(user.getPassword());
        return user;
    }

    public void registerNewUser(UserDto userDto) {
        userRepository.save(mapUserDtoToUser(userDto));
    }

}
