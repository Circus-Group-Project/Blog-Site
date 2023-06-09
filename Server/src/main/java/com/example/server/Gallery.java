package com.example.server;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;
import java.util.UUID;

@Document(collection = "gallery")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Gallery {
    @Id
    private ObjectId id;
    private String galleryID;
    private String Description;
    @DocumentReference()
    private List<Pictures> pictures;


    public Gallery(String reviewBody) {
        this.galleryID = UUID.randomUUID().toString();
    }
}
