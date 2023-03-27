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
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users/")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("list")
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<User> getAllUsers(@PathVariable String id) {
        return new ResponseEntity<User>(userService.getUserDetails(id).get(), HttpStatus.OK);
    }

    @PostMapping("add")
    public ResponseEntity<HttpStatus> addNewUser(@Valid @RequestBody UserDto userDto) {
        userService.registerNewUser(userDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }




    @PostMapping("login")
    public ResponseEntity<User> loginUser(@Valid @RequestBody UserDto userDto) {

        return new ResponseEntity<User>(userService.loginUser(userDto), HttpStatus.OK);
    }


}
