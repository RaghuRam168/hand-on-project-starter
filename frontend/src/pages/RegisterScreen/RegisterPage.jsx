import React from "react";
import SignUpForm from "../../components/signup/SignUpForm";
import person from "../person.jpeg";
import "./RegisterPage.css";
import Navbar2 from "../../components/Navbar/Navbar2";
const RegisterPage = () => {
  return (
    <div>
      <Navbar2/>
      <div className="register">
        <div className="item1">
          <img className="image" src={person} alt="person" />
          <h2 className="signup-heading" >Get started with Cuvette</h2>
          <p className="signup-description" >You can download and upload APIs for free</p>
        </div>
        <div className="item2">
          <div className="form">
              <SignUpForm className='form'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
