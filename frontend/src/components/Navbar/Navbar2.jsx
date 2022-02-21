import React, { useState } from 'react';
import logo from './logo.svg'
import { Link } from 'react-router-dom';
import './Navbar2.css';
import { useNavigate } from 'react-router-dom';
const Navbar2 = () => {

  const navigate = useNavigate()
  const [underLine,setUnderLine] = useState({
    myapi:false,
    myAccount:false
  })

  const onclickHandler = () =>{
    navigate('/new-api')
}

  const linkHandler = (e) =>{
    const user = localStorage.getItem("userInfo")
    console.log(user)
    if(e.target.name==='myapi')
    {
      setUnderLine({
        myapi:true,
        myAccount:false
      })
    }
    else
    {
      setUnderLine({
        myapi:false,
        myAccount:true
      })
    }
  }

 
  return <nav>
      <img src={logo} alt="Cuvette" />
      <ul className='list'>
          <li><Link to='/my-api'name='myapi' className={underLine.myapi?'links underline':'links' } onClick={linkHandler} >My APIs</Link></li>
          <li><Link to='/my-account' name='myAccount' className={underLine.myAccount?'links underline':'links' } onClick={linkHandler} >My Account</Link></li>
          {/* <li><Link to='/new-api'><button  className='new-api-btn' onClick={'onclickHandler'} >+New API</button></Link></li> */}
          <li><button  className='new-api-btn' onClick={onclickHandler} >+New API</button></li>
      </ul>
  </nav>
};

export default Navbar2;
