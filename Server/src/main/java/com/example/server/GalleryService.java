package com.example.server;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GalleryService{
    @Autowired
    private GalleryRepository galleryRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    PicturesService picturesService;
    public Optional<Gallery> createGallery(String description, String tag, List<String> pictures) throws JsonProcessingException {
        Gallery gallery = galleryRepository.insert(new Gallery(description,tag));

        mongoTemplate.update(User.class)
                .matching(Criteria.where("username").is("admin"))
                .apply(new Update().push("collectionIds").value(gallery))
                .first();
        for(String l : pictures){
            picturesService.createPicture(l, gallery.getGalleryID());
        }

        return galleryRepository.findById(gallery.getId());
    }
    public Optional<Gallery> addPicture(String galleryID, String link){
        picturesService.createPicture(link, galleryID);
        return galleryRepository.findGalleryByGalleryID(galleryID);

    }
    public Optional<Gallery> getGallery(String galleryID){
        return galleryRepository.findGalleryByGalleryID(galleryID);
    }

}
