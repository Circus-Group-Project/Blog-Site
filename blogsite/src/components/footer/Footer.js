import React from 'react'
import {BiHeadphone} from 'react-icons/bi'
import './Footer.css'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'

import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
            <div className='logo-footer'>
                <BiHeadphone className='icon'/>
                <h2>Circus</h2>
            </div>
            <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

        </div>
        <div className='col-container'>
            <form>
                <h3> Connect with us </h3>
                <div className='aboutBtn'>
                    <button>Contact Us</button>
                </div>
                <div className='social-group'>
                    <FiInstagram className='social-icon'/>
                    <FiFacebook className='social-icon'/>
                    <FiLinkedin className='social-icon'/>
                    <FiGithub className='social-icon'/>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
