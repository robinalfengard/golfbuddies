package golf.mates.demo.controllers;

import golf.mates.demo.dtos.UserDto;
import golf.mates.demo.entities.User;
import golf.mates.demo.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users/")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("list")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @PostMapping("add")
    public ResponseEntity<HttpStatus> addNewUser(@Valid @RequestBody UserDto userDto) {
        userService.registerNewUser(userDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}