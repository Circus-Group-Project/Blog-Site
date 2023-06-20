import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
import api from "../../api/axiosConfig";


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
  },[]);

  return (
    <div>
      <h1>Gallery Page</h1>
      <p>Gallery ID: {id}</p>
      {/* Additional content for the gallery page */}
    </div>
  )
}

export default GalleryDisplay
