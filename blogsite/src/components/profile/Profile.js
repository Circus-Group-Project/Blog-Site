import React from 'react'
import './Profile.css'
import {BsFilePerson} from 'react-icons/bs'
const Profile = () => {
  return (
    <div className='profile'>
        {/* Profile Icon and a little stat about the user */}
        <div className='profileContainer'>
          {/* profile icon*/}
          <div className='contents'>
            <div className='profileIcon'>
              <BsFilePerson className='icon'/>
            </div>
            <div className='profileData'>
              <p className='welcome'>Welcome <span>Admin</span>!</p>
              <div className='stats'>
                <p>Description: <span>You have upload permission</span></p>
                <p>Number of Images Uploaded: <span>20</span></p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile