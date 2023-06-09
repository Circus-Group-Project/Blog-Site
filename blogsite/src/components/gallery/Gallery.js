import React from 'react'
import './Gallery.css'
import dev1Image from '../../assets/dev1pfp.png'
import dev2Image from '../../assets/dev2pfp.png'
import {BsLink45Deg} from 'react-icons/bs'

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='galContainers'>
        <h2>Gallery</h2>
        <div className='containers'>
            {/*gallery collection 1 */}
            <div className='dev1'>
                <div className='devContent'>
                    <div className='devImage'>
                        <div>
                        <img src={dev1Image} alt='dev 1' style={{width: '100%', height: '100%', borderRadius:'50%'}}></img>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                      <div className='devName'>Gallery 1</div>
                      <BsLink45Deg className='social-icon'/>
                    </div>
                </div>
            </div>
            {/*gallery collection 2 */}
            <div className='dev1'>
                <div className='devContent'>
                    <div className='devImage'>
                        <div>
                        <img src={dev2Image} alt='dev 1' style={{width: '100%', height: '100%', borderRadius:'50%'}}></img>
                        </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'center'}}>
                      <div className='devName'>Gallery 2</div>
                      <BsLink45Deg className='social-icon'/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
