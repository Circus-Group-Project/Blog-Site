import React, { useState } from 'react'
import './Upload.css'
const Upload = () => {
    const [link, setLink] = useState('');
    //const  [selectedOption, SetSelectedOption] = useState('');
    const handleLinkChange = (event) => {
    const input = event.target.value;

    // Regular expression to match a URL pattern
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if (input === '' || urlRegex.test(input)) {
      setLink(input);
    }
  };
    return (
    <div className='uploadContainer'>
      <div className="container">
                <div className="form-container">
                    <form>
                        <h1>Upload</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter gallery name' required/>
                        </div>
                        <div>
                            <label>link</label>
                            <input type="text" value={link} placeholder='Enter gallery link' onChange={handleLinkChange} required/>
                        </div>
                        <div>
                            <label>Select an option:</label>
                                <select>
                                    <option value="">Select gallery tag</option>
                                    <option value="Hangouts">Hangouts</option>
                                    <option value="Birthdays">Birthdays</option>
                                    <option value="Other">Other</option>
                                </select>
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea rows='10' placeholder='Enter the description for galleries'/>
                        </div>
                        <button>Upload</button>
                    </form>
                </div>
        </div>
        <div className='Notification'></div>
    </div>
  )
}

export default Upload
//<option value="">Select gallery tag</option>