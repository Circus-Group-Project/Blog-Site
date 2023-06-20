package com.example.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/picture")
@CrossOrigin(origins = "*")

public class PicturesController {
    @Autowired
    private PicturesService picturesService;
    @GetMapping("/{pictureId}")
    public ResponseEntity<Optional<Pictures>> getPicture(@PathVariable String pictureId){
        return new ResponseEntity<>(picturesService.getPicture(pictureId), HttpStatus.OK);
    }
}
