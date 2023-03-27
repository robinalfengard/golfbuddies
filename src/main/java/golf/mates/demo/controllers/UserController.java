package golf.mates.demo.controllers;

import golf.mates.demo.entities.User;
import golf.mates.demo.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/users/")
public class UserController {
    @GetMapping
    List<User> getUsers() {
        return null;
    }
}
