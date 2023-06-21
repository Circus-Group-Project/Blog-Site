import React from 'react'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
    <div name='top' className='navbar'>
      <div className='container'>
      <Link to='/gallery'>
        <div className='logo'>
            <MdOutlineArrowBackIos className='icon' />
            <h3>Back to Gallery</h3>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar