package com.example.server;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GalleryRepository extends MongoRepository<Gallery, ObjectId> {
    Optional<Gallery> findGalleryByGalleryID(String galleryID);
}
