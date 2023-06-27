import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiEdit2Line, RiDeleteBin2Line } from 'react-icons/ri';
import api from "../../api/axiosConfig";
import './GalleryDisplay.css';

const GalleryDisplay = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [editingPicture, setEditingPicture] = useState(null);
  const [isDeleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [pictureToDelete, setPictureToDelete] = useState(null);

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

  return (
    <div className='galleryDisplay'>
      {data && data.pictures && (
        <div className='dataContainer'>
          <div className='iconsContainer'>
            <RiEdit2Line className='editIcon' onClick={() => handleEdit(data)} />
            <RiDeleteBin2Line className='deleteIcon' onClick={() => handleDelete(data.id)} />
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
                    <a href={mainImage} target="_blank" rel="noopener noreferrer" key={picture.pictureID}>
                      <div className='img1Container'>
                        <div className='devImage'>
                          <div>
                            <img src={mainImage} alt={picture.id.pictureID} style={{ width: '190px', height: '100%', borderRadius: '10%' }}></img>
                          </div>
                        </div>
                        <div className='devName'>Picture {index + 1}</div>
                        <div>
                          <RiDeleteBin2Line className='deleteIcon' onClick={() => handleDelete(picture.pictureID)} />
                        </div>
                      </div>
                    </a>
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
            <h2>Edit Picture</h2>
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
              <input
                type='text'
                value={editingPicture.link}
                onChange={(e) => setEditingPicture({ ...editingPicture, link: e.target.value })}
              />
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
            <h2 className='deleteH2'> Are you sure you want to delete?</h2>
            <div className='modalButtons2'>
              <button onClick={handleConfirmDelete}>Yes</button>
              <button onClick={handleCancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryDisplay;
