import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Dashboard/Banner";
import RowColoum from "../../components/RowColoum";
import image from "../../components/card.jpg";
import Title from "../../components/UI/Title";
const MyAPIs = () => {
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
    }
  ];

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
      <RowColoum title="All APIs" cards={data} />
    </div>
  );
};

export default MyAPIs;
