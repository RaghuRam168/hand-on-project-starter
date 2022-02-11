import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect ,useState } from "react";
import Banner from "../../components/Dashboard/Banner";
import RowColoum from "../../components/RowColoum";
import image from "../../components/card.jpg";
import Title from "../../components/UI/Title";
import axios from "axios";

const MyAPIs = () => {

  const[cardData,setCardData]=useState([])
  const loginData = localStorage.getItem("userInfo")
  const d = JSON.parse(loginData)
  const user = {
    author:d['token']
  }


  useEffect(()=>{
    const fetchData = async() =>{
      const x = await axios.post('http://localhost:4000/api/myAPIs',user);
      setCardData(x.data);
      console.log(cardData.length())

    }
    fetchData();
  },[])

  const navigate = useNavigate();
  if (!localStorage.getItem("userInfo")) {
    navigate("/");
  }
  const Logout = async () => {
    await localStorage.clear();
    navigate("/");
  };


  return (
    <div>
        <Title title="My APIs"/>
      <RowColoum title="All APIs" cards={cardData} />
    </div>
  );
};

export default MyAPIs;
