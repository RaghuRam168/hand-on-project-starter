import React, { useState } from "react";
import "./UploadImage.css";
import image from "./profile.png";
import axios from "axios";

const UploadImage = (props) => {
  const formData = new FormData()
  const [profile, setProfile] = useState(image);
  const[bgRemove,setBgRemove]=useState(null)
  const[remove,setRemove] = useState(false);

  const onUpload = async(event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (reader.readyState === 2) {
         setProfile(reader.result);
         console.log(profile)
        // console.log("profile setted")
        // console.log(profile)
        setRemove(true)
      }
    };
    reader.readAsDataURL(event.target.files[0])
    const i= await event.target.files[0]
    console.log(i)
    setBgRemove(i)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    formData.append("photo",bgRemove)
    const postImage =async()=>{ 
      const response = await axios.post("http://localhost:4000/api/bg-remove",formData)
      console.log(response)
      if(response){
        props.onRemoveBackground(response.data)
        setProfile(image)
        setRemove(false)
      }
      else{
        alert('Error with backend')
      }
      }
      postImage();
  };

  const clearImageHandler = (event) =>{
    setProfile(image)
    setRemove(false)
  }

// const removeBackgroundHandler = async(event) =>{
//   formData.append('size', 'auto');
//   formData.append("photo",profile)
//   const postImage =async()=>{ 
//     const response = await axios.post("http://localhost:4000/api/bg-remove",formData)
//     console.log(response)
//     if(response){
//       props.onRemoveBackground(response)
//       setProfile(image)
//       setRemove(false)
//     }
//     else{
//       alert('Error with backend')
//     }
//     }
//     postImage();

    
// }

  return (
    <div className="Upload-container">
     
      <form onSubmit={onSubmit} enctype="multipart/form-data" method="post">
      <div className="image-container">
        <img src={profile} alt="Upload" />
      </div>
      {!remove?<p>File should be png, jpg and less than 5mb</p>:<></>}
      {!remove?<label className="upload-label" htmlFor="input">Upload Image</label>:<></>}
        <input  type="file" accept="image/png image/jpg" onChange={onUpload} id="input" />
        <div style={{margin:"100px auto"}}>
        {remove? <button onClick={clearImageHandler} >Clear Image</button>:<p></p>}
        {remove? <button type="submit">Remove Background</button>:<p></p>}
        </div>
      </form>
    </div>
  );
};

export default UploadImage;
