package com.example.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class GalleryController {
    @Autowired
    private GalleryService galleryService;
    @PostMapping
    public ResponseEntity<Gallery> createGallery(@RequestBody Map<String, String> payload){
        return new ResponseEntity<>(galleryService.createGallery(payload.get("pictures")), HttpStatus.OK);
    }
}
