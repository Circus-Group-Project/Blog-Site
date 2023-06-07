import React from 'react'
import './About.css'
import dev1Image from '../../assets/dev1pfp.png'
import dev2Image from '../../assets/dev2pfp.png'
import { FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'

const About = () => {
  return (
    <div className='about'>
      <div className='content'>
        <div className="heading">
          <h2>About Us</h2>
        </div>
        <div className='contentText'>
          <p className='para'>This is a website project to commemorate the formation of our weird little friend cicle which had humble beginnings in League of Legends
            and from the start of our university.  We are a bunch of <span>4th year</span> and soon to be <span>Software Engineers </span>who thought this would be a good way
            to learn AGILE, team work and web development principles.<br/>
            Apart from this! We are just a bunch of chill gamers who are in our own league of tilt.
            <br/>
            We welcome you to our humble website! <br/>Feel free to connect with the developers responsible for this project!

          </p>

        </div>
      </div>
      <div className='devContainers'>
        <h2>Developers</h2>
        <div className='containers'>
            {/*dev 1 */}
            <div className='dev1'>
                <div className='devContent'>
                    <div className='devImage'>
                        <div>
                        <img src={dev1Image} alt='dev 1' style={{width: '100%', height: '100%', borderRadius:'50%'}}></img>
                        </div>
                    </div>
                    <div className='devName'>Nirmith V. D'Almeida</div>
                    <div className='socials'>
                        <a href="https://www.instagram.com/not_jay_codes_/" target="_blank" rel="noopener noreferrer"><FiInstagram className='social-icon'/></a>
                        <a href="https://www.linkedin.com/in/nirmith-dalmeida-81ab2418a/" target="_blank" rel="noopener noreferrer"><FiLinkedin className='social-icon'/></a>
                        <a href="https://github.com/NirmithDev" target="_blank" rel="noopener noreferrer"><FiGithub className='social-icon'/></a>
                    </div>
                </div>
            </div>
            {/*Dev 2 */}
            <div className='dev1'>
                <div className='devContent'>
                    <div className='devImage'>
                        <div>
                        <img src={dev2Image} alt='dev 1' style={{width: '100%', height: '100%', borderRadius:'50%'}}></img>
                        </div>
                    </div>
                    <div className='devName'>Abhai R. Gill</div>
                    <div className='socials'>
                        <a href="https://www.instagram.com/__roop__g/" target="_blank" rel="noopener noreferrer"><FiInstagram className='social-icon'/></a>
                        <a href="https://www.linkedin.com/in/abhai-g/" target="_blank" rel="noopener noreferrer"><FiLinkedin className='social-icon'/></a>
                        <a href="https://github.com/abhai28" target="_blank" rel="noopener noreferrer"><FiGithub className='social-icon'/></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
};

export default About