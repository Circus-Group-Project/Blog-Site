import React, { useState } from 'react';
import './Upload.css';
import { BsFillFilePlusFill } from 'react-icons/bs';

const Upload = () => {
  const [imageLinks, setImageLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const handleAddLink = () => {
    if (newLink) {
      setImageLinks((prevLinks) => [...prevLinks, newLink]);
      setNewLink('');
    }
  };

  return (
    <div className="uploadContainer">
      <div className="container">
        <div className="form-container">
          <form>
            <h1>Upload</h1>
            <div className="tex">
              <label>Name</label>
              <input type="text" placeholder="Enter gallery name" required />
            </div>
            <div className="imageLinks">
              <label>link</label>
              <div>
                <input
                  type="text"
                  placeholder="Enter image link"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  required
                />
              </div>
              <button className="addButton" type="button" onClick={handleAddLink}>
                <BsFillFilePlusFill className="icon" />
              </button>
            </div>
            <div className="tex">
              <label>Select an option:</label>
              <select>
                <option value="">Select gallery tag</option>
                <option value="Hangouts">Hangouts</option>
                <option value="Birthdays">Birthdays</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="tex">
              <label>Description</label>
              <textarea rows="10" placeholder="Enter the description for galleries" />
            </div>
            <button>Upload</button>
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