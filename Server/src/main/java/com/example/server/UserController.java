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
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserJson userData){
        Optional<User> user = userService.getUser(userData.getUsername());
        if(user.isPresent()){
            if(user.get().getPassword().equals(userData.getPassword())){
                return new ResponseEntity<>("success", HttpStatus.OK);
            }
            else{
                return new ResponseEntity<>("Wrong Password", HttpStatus.UNAUTHORIZED);
            }
        }
        return new ResponseEntity<>("User Not Found", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/{username}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable String username){
        return new ResponseEntity<>(userService.getUser(username),HttpStatus.OK);
    }
}
