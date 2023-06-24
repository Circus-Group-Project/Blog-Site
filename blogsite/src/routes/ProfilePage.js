import React, {useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
import Profile from '../components/profile/Profile'
import { AuthContext } from "../AuthContext";
import { Fragment } from 'react';

const ProfilePage = () => {
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
          <Navbar/>
          <Profile/>
          <Footer/>
        </div>
      ): (
        null
      )}
    </Fragment>
  )
}

export default ProfilePage