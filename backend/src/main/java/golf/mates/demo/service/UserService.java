package golf.mates.demo.service;


import golf.mates.demo.dtos.UserDto;
import golf.mates.demo.entities.User;
import golf.mates.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public User loginUser(UserDto userDto) {
        User user = userRepository.findByUsernameAndPassword(userDto.getUsername(),userDto.getPassword());
        if (user!=null){
            return user;
        }
        return null;
    }

    public Optional<User> getUserDetails(String id) {
        return userRepository.findById(Long.valueOf(id));
    }
}
