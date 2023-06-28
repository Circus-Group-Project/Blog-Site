import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBin2Line } from 'react-icons/ri';
import { useAuth } from '../../AuthContext';
import api from "../../api/axiosConfig";
import './GalleryDisplay.css';

const GalleryDisplay = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [editingPicture, setEditingPicture] = useState(null);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [pictureToDelete, setPictureToDelete] = useState(null);
  const [isLinkDialogOpen, setLinkDialogOpen] = useState(false);
  const [newImageLink, setNewImageLink] = useState('');
  const [imageLinks, setImageLinks] = useState([]);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await api.get(`/api/v1/gallery/${id}`);
        setData(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    getGallery();
  }, [id]);

  const handleEdit = (picture) => {
    setEditingPicture(picture);
  };

  const handleDelete = (pictureID) => {
    setPictureToDelete(pictureID);
    setDeleteConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    // Implement your delete logic here
    console.log(`Delete picture with ID: ${pictureToDelete}`);
    setDeleteConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmationOpen(false);
  };

  const handleModalSubmit = () => {
    // Implement your update logic here
    console.log('Update data:', editingPicture);
    setEditingPicture(null);
  };

  const handleOpenLink = (link) => {
    setLinkDialogOpen(true);
  };

  const handleCloseLinkDialog = () => {
    setLinkDialogOpen(false);
  };

  const handleAddLink = () => {
    if (newImageLink.trim() === '') {
      alert('Link cannot be empty');
      return;
    }
    setImageLinks((prevLinks) => [...prevLinks, newImageLink]);
    setNewImageLink('');
  };

  useEffect(() => {
    console.log('Image links:', imageLinks);
  }, [imageLinks]);

  return (
    <div className='galleryDisplay'>
      {data && data.pictures && (
        <div className='dataContainer'>
          <div className='iconsContainer'>
            {isLoggedIn && (
              <RiEdit2Line className='editIcon' onClick={() => handleEdit(data)} />
            )}
            {isLoggedIn && (
              <RiDeleteBin2Line className='deleteIcon' onClick={() => handleDelete(data.id)} />
            )}
          </div>
          <h2>{data.name}</h2>
          <div className='contents'>
            <p><span>Tag</span>: {data.tag}</p>
            <h2>Description</h2>
            <div>
              <p>{data.description}</p>
            </div>
            <h2>Pictures</h2>
            <div className='pictures'>
              <div className='containers'>
                {data.pictures.map((picture, index) => {
                  const a = picture.link.replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?id=');
                  const mainImage = a.replace('/view', '');
                  return (
                    <div key={picture.pictureID}>
                      <div className='img1Container'>
                        <div className='devImage'>
                          <div>
                            <img src={mainImage} alt={picture.id.pictureID} style={{ width: '190px', height: '100%', borderRadius: '10%' }}></img>
                          </div>
                        </div>
                        <div className='devName'>Picture {index + 1}</div>
                        <div>
                        {isLoggedIn && (<RiDeleteBin2Line className='deleteIcon' onClick={() => handleDelete(picture.pictureID)} />)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {editingPicture && (
        <div className='popup'>
          <div className='popupContent'>
            <h2>Edit Gallery</h2>
            <div>
              <label>Name:</label>
              <input
                type='text'
                value={editingPicture.name}
                onChange={(e) => setEditingPicture({ ...editingPicture, name: e.target.value })}
              />
            </div>
            <div>
              <label>Tag:</label>
              <select
                value={editingPicture.tag}
                onChange={(e) => setEditingPicture({ ...editingPicture, tag: e.target.value })}
              >
                <option value='hangouts'>Hangouts</option>
                <option value='birthdays'>Birthdays</option>
                <option value='other'>Other</option>
              </select>
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={editingPicture.description}
                onChange={(e) => setEditingPicture({ ...editingPicture, description: e.target.value })}
              />
            </div>
            <div>
              <label>Link:</label>
              <button onClick={() => handleOpenLink(editingPicture.link)}>Edit Link</button>
            </div>
            <div className='LinkStorage'>
              {imageLinks.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
            <div className='modalButtons'>
              <button onClick={handleModalSubmit}>Update</button>
              <button onClick={() => setEditingPicture(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {isDeleteConfirmationOpen && (
        <div className='popup'>
          <div className='popupContent2'>
            <h2 className='deleteH2'>Are you sure you want to delete?</h2>
            <div className='modalButtons2'>
              <button onClick={handleConfirmDelete}>Yes</button>
              <button onClick={handleCancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}

      {isLinkDialogOpen && (
        <div className='popup'>
          <div className='popupContent'>
            <h2>Add Image Link</h2>
            <div>
              <label>Link:</label>
              <input
                type='text'
                value={newImageLink}
                onChange={(e) => setNewImageLink(e.target.value)}
              />
            </div>
            <div className='modalButtons'>
              <button onClick={handleAddLink}>Add</button>
              <button onClick={handleCloseLinkDialog}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryDisplay;
