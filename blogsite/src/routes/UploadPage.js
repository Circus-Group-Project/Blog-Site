import React, {useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
import Upload from '../components/upload/Upload'
import { AuthContext } from "../AuthContext";
import { Fragment } from 'react';

const UploadPage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    
    <Fragment>
    {isLoggedIn ? (
      <div>
        <Navbar></Navbar>
        <Upload></Upload>
        <Footer></Footer>
      </div>
    ): (
      null
    )}
    </Fragment>
  )
}

export default UploadPage
