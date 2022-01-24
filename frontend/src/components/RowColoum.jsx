import React from "react";
import "./RowColoumn.css";
import image from "./card.jpg";
const RowColoum = (props) => {
  return(
    
    
<div className="dashboard-container">
<div className="card-container">

{
    props.cards.map((prop) => (
      <div className="card">
        <img className="card-image" src={image} alt="API" />
        <div className="card-title">{prop.title}</div>
        <div className="card-description">{prop.description}</div>
      </div>
    ))
}
</div>
</div>
  );
};

export default RowColoum;
