import React, {useState, useContext} from 'react'
import {BiHeadphone} from 'react-icons/bi'
import {BsPersonCircle} from 'react-icons/bs'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link, useLocation} from 'react-router-dom'
import { isMobile } from "react-device-detect";
import './Navbar.css'
import { AuthContext } from "../../AuthContext";


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const location = useLocation();
    const { isLoggedIn, logout } = useContext(AuthContext);
    return (
    <div name='top' className='navbar'>
      <div className='container'>
      <Link to='/'>
        <div className='logo'>
            <BiHeadphone className='icon' />
            <h1>Circus</h1>
        </div>
        </Link>
        <ul className={nav?'nav-menu active':'nav-menu'}>
            <li><Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to={'/about'} className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to={'/gallery'} className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
            {isLoggedIn ? (<li><Link to={'/upload'} className={location.pathname === '/upload' ? 'active' : ''}>Upload</Link></li>):(<></>)}
            
            <li><Link to={'/contact'} className={location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
            {isLoggedIn ? (
              <button onClick={logout}>Logout</button>
              ) : (
              <Link to='/login' className={location.pathname === '/login' ? 'active' : ''}>
                {isMobile ? <button>Sign In</button> : <BsPersonCircle className='icon'></BsPersonCircle>}
              </Link>
            )}
        </ul>
        <div className='hamburger' onClick={handleNav}>
            {!nav?(<FaBars className='icon'/>):(<FaTimes className='icon'/>)}
        </div>
      </div>
    </div>
  )
}

export default Navbar

