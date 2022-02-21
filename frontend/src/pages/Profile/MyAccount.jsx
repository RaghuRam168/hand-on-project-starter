import React from 'react';
import Title from '../../components/UI/Title';
import { useNavigate } from 'react-router-dom';
const MyAccount = () => {
  const navigate = useNavigate();
  const login =JSON.parse(localStorage.getItem('userInfo'))
  if(login.token === ''){
    navigate('/');
  }
  const onClickHandler = ()=>{
    localStorage.clear();
    navigate('/')
  }
 
  return <div>
      <Title title = "MY ACCOUNT"></Title>
      <button onClick={onClickHandler} >Logout</button>
  </div>;
};

export default MyAccount;
