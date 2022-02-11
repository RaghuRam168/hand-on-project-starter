import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Dashboard/Banner";
import RowColoum from "../../components/RowColoum";
import image from "../../components/card.jpg";
import Title from "../../components/UI/Title";
import axios from "axios";
const Dashboard =() => {
  const[cards,setCards]=useState([])
  const user=localStorage.getItem("userInfo")
  const navigate = useNavigate();
  if (user===null){
    navigate("/");
  }
  const x= JSON.parse(user)
 // alert(x["token"])

  useEffect(()=>{
    const fetchData = async () =>{
     const data = await axios.get("http://localhost:4000/api/fetchAll",{});
      setCards(data.data)
      console.log(data)
    }
    fetchData();
  },[])


  return (
    <div>
      <Banner />
      <Title title="All APIs"></Title>
      <RowColoum title="All APIs" cards={cards} />
    </div>
  );
};

export default Dashboard;
