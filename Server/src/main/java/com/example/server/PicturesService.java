package com.example.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PicturesService {
    @Autowired
    private PicturesRepository picturesRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public Pictures createPicture(String link,String gID){
        Pictures picture = picturesRepository.insert(new Pictures(link));

        mongoTemplate.update(Gallery.class)
                .matching(Criteria.where("galleryID").is(gID))
                .apply(new Update().push("pictures").value(picture))
                .first();
        return picture;
    }
    public Optional<Pictures> getPicture(String pictureID){
        return picturesRepository.findPicturesByPictureID(pictureID);
    }
}
