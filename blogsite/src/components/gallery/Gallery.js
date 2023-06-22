import React from "react";
import "./Gallery.css";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await api.get("/api/v1/gallery");
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getGallery();
  }, []);
  return (
    <div className="gallery">
      <div className="galContainers">
        <h2>Gallery</h2>
        <div className="containers">
          {data.map((item, index) => {
            const firstImage = item.pictures[0].link.replace(
              "https://drive.google.com/file/d/",
              "https://drive.google.com/uc?id="
            );
            const mainImage = firstImage.replace("/view", "");
            return (
              <Link to={`/galleryDisplay/${item.galleryID}`} key={index}>
                <div className="dev1">
                  <div className="devContent">
                    <div className="devImage">
                      <div>
                        <img
                          src={mainImage}
                          alt={`${item.name}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                          }}
                        ></img>
                      </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div className="devName">{item.name}</div>
                      <BsLink45Deg className="social-icon" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
