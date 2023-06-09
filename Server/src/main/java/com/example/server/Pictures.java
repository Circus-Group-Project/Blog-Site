package com.example.server;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "pictures")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pictures {
    @Id
    private ObjectId id;
    private String link;
    private String pictureID;

    public Pictures(String link) {
        this.link = link;
        this.pictureID = UUID.randomUUID().toString();
    }
}
