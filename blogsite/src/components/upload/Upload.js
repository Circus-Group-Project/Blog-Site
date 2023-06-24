import React, { useState } from "react";
import "./Upload.css";
import { BsFillFilePlusFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import api from "../../api/axiosConfig";

const Upload = () => {
  const [imageLinks, setImageLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [galleryName, setGalleryName] = useState("");
  const [galleryTag, setGalleryTag] = useState("");
  const [description, setDescription] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleAddLink = (e) => {
    e.preventDefault();

    const linkPattern = /^(http(s)?:\/\/)?[\w.-]+\.[a-zA-Z]{2,20}(\/.*)?$/;

    if (linkPattern.test(newLink)) {
      setImageLinks((prevLinks) => [...prevLinks, newLink]);
      setNewLink("");
    } else {
      console.log("Invalid link input");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name: galleryName,
      tag: galleryTag,
      description: description,
      pictures: imageLinks,
    };

    try {
      const response = await api.post("/api/v1/gallery", requestData);
      console.log(response);
      setShowDialog(true);
    } catch (err) {
      console.log(err);
    }

    setGalleryName("");
    setImageLinks([]);
    setNewLink("");
    setGalleryTag("");
    setDescription("");
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="uploadContainer">
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h1>Upload</h1>
            <div className="tex">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter gallery name"
                value={galleryName}
                onChange={(e) => setGalleryName(e.target.value)}
                required
              />
            </div>
            <div className="imageLinks">
              <label>Link</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter image link"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                />
              </div>
              <button className="addButton" type="button" onClick={handleAddLink}>
                <BsFillFilePlusFill className="icon" />
              </button>
            </div>
            <div className="tex">
              <label>Select an option:</label>
              <select
                value={galleryTag}
                onChange={(e) => setGalleryTag(e.target.value)}
                required
              >
                <option value="">Select gallery tag</option>
                <option value="Hangouts">Hangouts</option>
                <option value="Birthdays">Birthdays</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="tex">
              <label>Description</label>
              <textarea
                rows="10"
                placeholder="Enter the description for galleries"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {imageLinks.length > 0 ? (
              <div>
                <button type="submit">Upload</button>
              </div>
            ) : (
              <div>
                <p>Needs at least 1 image</p>
              </div>
            )}
          </form>
        </div>
        {imageLinks.length > 0 && (
          <div className="linkList">
            <h2 className="linkHeader">Image Links</h2>
            <ul>
              {imageLinks.map((link, index) => (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {showDialog && (
        <div className="dialog">
          <p>Form submitted successfully!</p>
          <IoMdClose className="close-icon" onClick={handleCloseDialog} />
        </div>
      )}
    </div>
  );
};

export default Upload;
