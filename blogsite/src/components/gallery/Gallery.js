import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";
import api from "../../api/axiosConfig";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await api.get("/api/v1/gallery");
        setData(response.data);
        console.log(response.data)
        setFilteredData(response.data); // Set initial filtered data to all items
      } catch (err) {
        console.log(err);
      }
    };
    getGallery();
  }, []);

  const handleFilter = (filter) => {
    if (filter === "all") {
      setFilteredData(data); // Show all items
    } else {
      const filteredItems = data.filter((item) => item.tag === filter);
      setFilteredData(filteredItems);
    }
    setActiveFilter(filter);
  };

  return (
    <div className="gallery">
      <div className="galContainers">
        <h2>Gallery</h2>
        <div className="filterButtons">
          <li className={`btnDesn ${activeFilter === "all" ? "active" : ""}`} onClick={() => handleFilter("all")}>All</li>
          <li className={`btnDesn ${activeFilter === "Birthdays" ? "active" : ""}`} onClick={() => handleFilter("Birthdays")}>Birthdays</li>
          <li className={`btnDesn ${activeFilter === "Hangouts" ? "active" : ""}`} onClick={() => handleFilter("Hangouts")}>Hangouts</li>
          <li className={`btnDesn ${activeFilter === "Other" ? "active" : ""}`} onClick={() => handleFilter("Other")}>Other</li>
        </div>
        <div className="containers">
          {filteredData.map((item, index) => {
            const firstImage = item.pictures[0].link.replace(
              "https://drive.google.com/file/d/",
              "https://drive.google.com/uc?id="
            );
            const mainImage = firstImage.replace("/view", "");
            return (
              <Link className="link1" to={`/galleryDisplay/${item.galleryID}`} key={index}>
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