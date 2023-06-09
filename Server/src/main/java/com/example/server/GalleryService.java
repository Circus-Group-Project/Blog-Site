package com.example.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class GalleryService{
    @Autowired
    private GalleryRepository galleryRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Gallery createGallery(String reviewBody){
        Gallery gallery = galleryRepository.insert(new Gallery(reviewBody));

        mongoTemplate.update(User.class)
                .matching(Criteria.where("username").is("admin"))
                .apply(new Update().push("collectionIds").value(gallery))
                .first();
        return gallery;
    }
}
