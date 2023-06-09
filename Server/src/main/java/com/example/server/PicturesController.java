package com.example.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/picture")
public class PicturesController {
    @Autowired
    private PicturesService picturesService;
    @GetMapping("/{pictureId}")
    public ResponseEntity<Optional<Pictures>> getPicture(@PathVariable String pictureId){
        return new ResponseEntity<>(picturesService.getPicture(pictureId), HttpStatus.OK);
    }
}
