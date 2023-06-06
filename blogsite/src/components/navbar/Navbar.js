import React, {useState} from 'react'
import {BiHeadphone} from 'react-icons/bi'
import {BsPersonCircle} from 'react-icons/bs'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { isMobile } from "react-device-detect";
import './Navbar.css'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
    <div name='top' className='navbar'>
      <div className='container'>
        <div className='logo'>
            <BiHeadphone className='icon' />
            <h1>Circus</h1>
        </div>
        <ul className={nav?'nav-menu active':'nav-menu'}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/gallery'}>Gallery</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <Link to='/Login'>{isMobile ? <button> Sign In</button>:<BsPersonCircle className='icon'></BsPersonCircle>}</Link>
        </ul>
        <div className='hamburger' onClick={handleNav}>
            {!nav?(<FaBars className='icon'/>):(<FaTimes className='icon'/>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar

//<li>Home</li>
  //          <li>About</li>
    //        <li>Gallery</li>
      //      <li>Contact Us</li>
        //    {isMobile ? <button> Sign In</button>:<BsPersonCircle className='icon'></BsPersonCircle>}