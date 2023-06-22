import React from 'react'

import Navbar from '../components/navbar/NavbarDisplay';
import Footer from '../components/footer/Footer'
import GalleryDisplay from '../components/gallery/GalleryDisplay'

const GalleryDisplayPage = () => {
  return (
    <>
      <Navbar/>
      <GalleryDisplay/>
      <Footer/>
    </>
  )
}

export default GalleryDisplayPage
