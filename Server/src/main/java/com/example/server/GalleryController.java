package com.example.server;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/gallery")
@CrossOrigin(origins = "*")
public class GalleryController {
    @Autowired
    private GalleryService galleryService;
    @PostMapping
    public ResponseEntity<Optional<Gallery>> createGallery(@RequestBody GalleryData payload) throws JsonProcessingException {
        return new ResponseEntity<>(galleryService.createGallery(payload.getName(),payload.getDescription(),payload.getTag(), payload.getPictures()), HttpStatus.OK);
    }
    @GetMapping("/{galID}")
    public ResponseEntity<Optional<Gallery>> getGalleryById(@PathVariable String galID){
        return new ResponseEntity<>(galleryService.getGallery(galID),HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<Gallery>> getAllGallery(){
        return new ResponseEntity<>(galleryService.getAllGallery(),HttpStatus.OK);
    }
    @PutMapping("/addPicture")
    public ResponseEntity<Optional<Gallery>> addPicture(@RequestBody AddPictureData payload){
        return new ResponseEntity<>(galleryService.addPicture(payload.getGalleryID(), payload.getLink()),HttpStatus.OK);
    }
}
