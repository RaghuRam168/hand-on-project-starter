import React, { useState } from 'react';
import './NewAPIModal.css'
const NewAPIModal = () => {
  const[input,setInput]=useState({
    ApiName:"",
    ApiEndPoint:"",
    Description:"",
  })

  const onChangeInput = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    const newdata = { ...input, [name]: value };
    setInput(newdata);
  }

  return (
  <div className='modal-container'>
    <div className='x-btn' >
      <button>X</button>
    </div>
    <div className='modal-title'>
      <h2>Add new API</h2>
    </div>
    <div className='modal-input-container'>
      <input type="text" placeholder='API Name'onChange={onChangeInput} name='ApiName' value={input.ApiName}  className='modal-input' />
      <input type="text" placeholder='API End Point'onChange={onChangeInput} name='ApiEndPoint' value={input.ApiEndPoint}  className='modal-input' />
      <input type="text" placeholder='Description'onChange={onChangeInput} name='Description' value={input.Description} className='modal-input' />
    </div>
  </div>)
};

export default NewAPIModal;
