import React from 'react';
import UploadImage from '../../components/UploadImage/UploadImage';
import './BackgroundRemoverScreen.css'
const BackgroundRemoverScreen = () => {
//    return <UploadImage/>
  return <div className='background-screen-container' >
      <div className='container1'  >
        <h1>Remove image background</h1>
        <p>100% automatic and free</p>
      </div>
      <div className='container2' ><UploadImage/></div>
      
  </div>
;
};

export default BackgroundRemoverScreen;
