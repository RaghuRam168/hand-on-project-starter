import React, { useState } from "react";
import "./UploadImage.css";
import image from "./profile.png";
import axios from "axios";

const formData = new FormData()

const UploadImage = (props) => {
  let imgURL=''
  const [profile, setProfile] = useState(image);
  const[remove,setRemove] = useState(false);
  const[url,setURL]=useState('')

  const onUpload = (event) => {
    const reader = new FileReader();
    setURL(event.target.result);
    reader.onload = (event) => {
      if (reader.readyState === 2) {
        setProfile(reader.result);
        imgURL=event.target.result;
        formData.append('image',profile)
        console.log(profile)
        setRemove(true)
      }
    };
    reader.readAsDataURL(event.target.files[0])
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const clearImageHandler = (event) =>{
    setProfile(image)
    setRemove(false)
  }

const removeBackgroundHandler = async(event) =>{
  const x ={
    image:profile
  }
  try {
    const data = await(axios.post('http://localhost:4000/upload',formData))
    console.log(data)
    props.onRemoveBackground(data.file)
    setProfile(image)
    setRemove(false)
  } catch (error) {
    alert('Error with backend')
  }
    
}

  return (
    <div className="Upload-container">
     
      <form onSubmit={onSubmit}>
      <div className="image-container">
        <img src={profile} alt="Upload" />
      </div>
      {!remove?<p>File should be png, jpg and less than 5mb</p>:<></>}
      {!remove?<label className="upload-label" htmlFor="input">Upload Image</label>:<></>}
        <input  type="file" accept="image/png image/jpg" onChange={onUpload} id="input" />
        <div style={{margin:"100px auto"}}>
        {remove? <button onClick={clearImageHandler} >Clear Image</button>:<p></p>}
        {remove? <button onClick={removeBackgroundHandler}>Remove Background</button>:<p></p>}
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
