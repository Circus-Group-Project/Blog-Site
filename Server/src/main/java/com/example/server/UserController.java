package com.example.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "*")

public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/login/{username}/{password}")
    public ResponseEntity<String> login(@PathVariable String username,@PathVariable String password){
        Optional<User> user = userService.getUser(username);
        if(user.isPresent()){
            if(user.get().getPassword().equals(password)){
                return new ResponseEntity<String>("success", HttpStatus.OK);
            }
            else{
                return new ResponseEntity<String>("Wrong Password", HttpStatus.UNAUTHORIZED);
            }
        }
        return new ResponseEntity<String>("User Not Found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable String username){
        return new ResponseEntity<>(userService.getUser(username),HttpStatus.OK);
    }
}
