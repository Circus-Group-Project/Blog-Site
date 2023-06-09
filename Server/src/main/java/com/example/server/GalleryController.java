package com.example.server;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/gallery")
public class GalleryController {
    @Autowired
    private GalleryService galleryService;
    @PostMapping
    public ResponseEntity<Optional<Gallery>> createGallery(@RequestBody GalleryData payload) throws JsonProcessingException {
        return new ResponseEntity<>(galleryService.createGallery(payload.getDescription(),payload.getTag(), payload.getPictures()), HttpStatus.OK);
    }
}
