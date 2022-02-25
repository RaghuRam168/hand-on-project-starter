import React from "react";
import "./RowColoumn.css";
import image from "./card.jpg";
import Skeleton from "./ShimmerEffect/Skeleton"
const RowColoum = (props) => {
  console.log(props)
  return (
   
    <div className="dashboard-container">
       {props.skeleton &&<Skeleton/>}
       <div className="card-container">
        {props.cards.map((prop) => (
          <div className="card" key={prop._id}>
            <img className="card-image" src={`data:image/png;base64,${prop.file}`} alt="API" />
            <div className="card-title">{prop.apiName}</div>
            <div className="card-description">{prop.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RowColoum;
