import React, { useState } from "react";
import "./UploadImage.css";
import image from "./profile.png";
const UploadImage = () => {
  const [profile, setProfile] = useState(image);
  const[remove,setRemove] = useState(false);
  const onUpload = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfile(reader.result);
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

const removeBackgroundHandler = (event) =>{
  
}

  return (
    <div className="Upload-container">
     
      <form onSubmit={onSubmit}>
      <div className="image-container">
        <img src={profile} alt="Upload" />
      </div>
      {!remove?<p>File should be png, jpg and less than 5mb</p>:<></>}
      {!remove?<label className="upload-label" htmlFor="input">{"Upload Image->"}</label>:<></>}
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
