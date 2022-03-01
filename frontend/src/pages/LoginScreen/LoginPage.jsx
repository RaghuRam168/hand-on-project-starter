import React from "react";
import person from "../person.jpeg";
import LoginForm from "../../components/Login/NewLogin";
import "./LoginPage.css"
import Navbar from "../../components/Navbar/Navbar";
const LoginPage = () => {
  return (
    <>
      <Navbar/>
      <div className="login">
        <div className="item1">
          <img className="img" src={person} alt="person" />
          <h2 className="heading" >Welcome to your Dashboard</h2>
          <p className="description">
            Your uploaded APIs will be displayed here once you login to your
            account
          </p>
        </div>
        <div className="item2">
            <LoginForm />
        </div>
    </div>
    </>
  );
};

export default LoginPage;
