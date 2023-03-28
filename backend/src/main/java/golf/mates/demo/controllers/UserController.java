package golf.mates.demo.controllers;

import golf.mates.demo.dtos.request.UserRegistrationDto;
import golf.mates.demo.entities.SecurityUser;
import golf.mates.demo.entities.User;
import golf.mates.demo.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/users/")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("list")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping("register")
    public ResponseEntity<HttpStatus> addNewUser(@Valid @RequestBody UserRegistrationDto userRegistrationDto) {
        userService.registerNewUser(userRegistrationDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    private UUID getLoggedInUserId() {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();
        SecurityUser loggedInUser = (SecurityUser) authentication.getPrincipal();
        return loggedInUser.getUserId();

    }

    private String getLoggedInUsername() {
        Authentication authentication =
                SecurityContextHolder.getContext().getAuthentication();
        return authentication.getName();
    }

  

}
