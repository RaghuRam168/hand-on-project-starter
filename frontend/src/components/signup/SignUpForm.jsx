import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUpForm.css";
import { Navigate } from "react-router-dom";

const SignUpForm = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newdata = { ...user, [name]: value };
    setUser(newdata);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("clicked");
    // props.onSignIn(user);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
     await axios.post("http://localhost:4000/api/register", user,config);
      navigate("/");
    } catch (error) {
      alert("Enter the creadentials which are no registered")
    }

    // axios.post("http://localhost:4000/api/register", user);
    // navigate("/");

    setUser({
      fullname: "",
      email: "",
      password: "",
    });
  };

  const onchange = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="sign-up-division">
      <form className="form">
        <h3>Signup to experience the previlages</h3>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            onChange={onChangeHandler}
            name="fullname"
            value={user.fullname}
            className="form-control"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={onChangeHandler}
            name="email"
            value={user.email}
            className="form-control"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={onChangeHandler}
            name="password"
            value={user.password}
            className="form-control"
          />
        </div>
        {/* <Button className={'btn-block'} onClick={submitHandler} color='white' backColor='black' text='Register'/> */}
        <button className="signup-btn" onClick={submitHandler}>Register</button>
        <p className="or">OR</p>
        <button className="signup-btn" onClick={onchange}>Login</button>
      </form>
    </div>
  );
};

export default SignUpForm;
