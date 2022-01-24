import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./newlogin.css";
const NewLogin = (props) => {
  let navigate = useNavigate();

useEffect(()=>{
  const logged = localStorage.getItem('userInfo')
  if(logged){
    navigate("/dash-board");
  }
})

  const [user, setUser] = useState({
    email: "",
    password: "",
    loading: false,
    error: false,
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newdata = { ...user, [name]: value };
    setUser(newdata);
  };
  const submitHandler = async (event) => {
    console.log("clicked");
    event.preventDefault();
    // props.onSignIn(user);

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setUser({ ...user, loading: true });
      const { data } = await axios.post(
        "http://localhost:4000/api/Login",
        {
          email:user.email,
          password:user.password
        },
        config
      );
      console.log(data)
      localStorage.setItem("userInfo",JSON.stringify(data))
      setUser({ ...user, loading: false });
      navigate("/dash-board");
    } 
    catch (error) {
      setUser({ ...user, loading: false });
      setUser({...user,error:error.response.data.message})
      alert("Enter Registered Credentials")
    }
    
    setUser({
      fullname: "",
      email: "",
      password: "",
    });
  };

  const onRegister = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <div className="division">
      <form className="form">
        <h3>Login to your account</h3>
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
        <button className="login-btn" onClick={submitHandler}>Login</button>
        <p className="or">OR</p>
        <button className="login-btn" onClick={onRegister}>Register</button>
      </form>
    </div>
  );
};

export default NewLogin;
