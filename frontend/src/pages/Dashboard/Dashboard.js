import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Dashboard/Banner";
import RowColoum from "../../components/RowColoum";
import image from "../../components/card.jpg";
import Title from "../../components/UI/Title";
const Dashboard = () => {

  const user=localStorage.getItem("userInfo")
  const navigate = useNavigate();
  if (user===null){
    navigate("/");
  }
  alert(user)

  const data = [
    {
      title: "Background",
      description: "The descriptipn of the API in quick brief and we will truncate it here...",
      image: image,
    },{
      title: "Background",
      description: "The descriptipn of the API in quick brief and we will truncate it here...",
      image: image,
    },{
      title: "Background",
      description: "The descriptipn of the API in quick brief and we will truncate it here...",
      image: image,
    },{
      title: "Background",
      description: "The descriptipn of the API in quick brief and we will truncate it here...",
      image: image,
    },{
      title: "Background",
      description: "The descriptipn of the API in quick brief and we will truncate it here...",
      image: image,
    },{
      title: "Background",
      description: "The descriptipn of the API in quick brief and we will truncate it here...",
      image: image,
    },{
      title: "Background",
      description: "The descriptipn of the API in quick brief and we will truncate it here...",
      image: image,
    },{
      title: "Background",
      description: "The descriptipn of the API in quick brief and we will truncate it here...",
      image: image,
    },
  ];


  return (
    <div>
      <Banner />
      <Title title="All APIs"></Title>
      <RowColoum title="All APIs" cards={data} />
    </div>
  );
};

export default Dashboard;
