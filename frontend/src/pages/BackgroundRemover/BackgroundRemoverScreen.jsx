import React, { useState } from 'react';
import UploadImage from '../../components/UploadImage/UploadImage';
import './BackgroundRemoverScreen.css'
import image from './background.jpeg'
const BackgroundRemoverScreen = () => {
//    return <UploadImage/>
  const[remove,setRemove] = useState(false);
  const[backgroundImage,setBackgroundImage] = useState(image)

  const onRemoveBackground = (reqImage)=>{
    setBackgroundImage(reqImage)
    setRemove(true)
  }

  const clearImageHandler = (event) =>{
    setBackgroundImage(image)
    setRemove(false)
  }

  const downloadHandler = (event) => {
      alert("Successfully Downloaded")
  }

  return <div className='background-screen-container' >
      <div className='container1'  >
        <h1>Remove image background</h1>
        <p>100% automatic and free</p>
        <div className='background-image-container'>
          <img src={backgroundImage} alt='background'/>
        </div>
        <div className='buttons' >
        {remove? <button onClick={clearImageHandler} >Clear Image</button>:<p></p>}
        {remove? <button onClick={downloadHandler}>Download</button>:<p></p>}
        </div>
        </div>
      <div className='container2' >
        <div className='upload-container' > <UploadImage  onRemoveBackground={onRemoveBackground} /></div>
       </div>
  </div>
;
};

export default BackgroundRemoverScreen;
