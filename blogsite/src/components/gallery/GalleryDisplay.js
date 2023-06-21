import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from "../../api/axiosConfig";
import './GalleryDisplay.css';

const GalleryDisplay = () => {
  const { id } = useParams();
  const [data,setData] = useState([]);
  
  useEffect(() => {
    const getGallery = async () => {
      try {
        const response = await api.get(`/api/v1/gallery/${id}`);
        console.log(response.data)
        setData(response.data)
      } catch (err) {
        console.log(err);
      }
    };
    getGallery();
  },[id]);

  return (
    <div className='galleryDisplay'>
      {data && data.pictures && (
        <div className='dataContainer'>
          <h2>{data.name}</h2>
          <div className='contents'>
            <p><span>Tag</span>: {data.tag}</p>
            <h2>Pictures</h2>
            <div className='pictures'>
              <div className='containers'>
              {data.pictures.map((picture, index) => {
                const a = picture.link.replace('https://drive.google.com/file/d/', 'https://drive.google.com/uc?id=');
                const mainImage = a.replace('/view', '');
                console.log(a)
                console.log(mainImage)
                return (
                  <a href={mainImage} target="_blank" rel="noopener noreferrer" key={picture.pictureID}>
                    <div className='img1Container'>
                      <div className='devImage'>
                          <div>
                          <img src={mainImage} alt={picture.id.pictureID} style={{height: '100%', borderRadius:'10%'}}></img>
                          </div>
                      </div>
                      <div className='devName'>Picture {index+1}</div>
                    </div>
                  </a>
                );
              })}
              </div>
            </div>
          </div>
        </div>
        )}      
    </div>
  )
}

export default GalleryDisplay
//<p>Gallery ID: {id}</p>