import React, { useState } from 'react';
import './Upload.css';
import { BsFillFilePlusFill } from 'react-icons/bs';

const Upload = () => {
  const [imageLinks, setImageLinks] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [galleryName, setGalleryName] = useState('');
  const [galleryTag, setGalleryTag] = useState('');
  const [description, setDescription] = useState('');

  const handleAddLink = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const linkPattern = /^(http(s)?:\/\/)?[\w.-]+\.[a-zA-Z]{2,20}(\/.*)?$/;

    if (linkPattern.test(newLink)) {
      setImageLinks((prevLinks) => [...prevLinks, newLink]);
      setNewLink('');
    } else {
      console.log('Invalid link input');
      // You can show an error message to the user or take any other appropriate action
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Here you can access all the form data, such as galleryName, imageLinks, galleryTag, and description
    // You can perform any necessary actions, such as sending the data to a server or displaying it in the UI
    console.log('Gallery Name:', galleryName);
    console.log('Image Links:', imageLinks);
    console.log('Gallery Tag:', galleryTag);
    console.log('Description:', description);

    // Reset the form fields
    setGalleryName('');
    setImageLinks([]);
    setNewLink('');
    setGalleryTag('');
    setDescription('');
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
            <button type="submit">Upload</button>
          </form>
        </div>
        <div className="linkList">
          <h2 className='linkHeader'>Image Links</h2>
          <ul>
            {imageLinks.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="Notification"></div>
    </div>
  );
};

export default Upload;