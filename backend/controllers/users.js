const express = require("express");
const loginModel = require("../Models/loginModel");
const signUpModel = require("../Models/signUpModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require('../utils/generateJWT')


const getUsers = asyncHandler(async (req, res) => {
  try {
    const logined_users = await loginModel.find();
    res.status(200).json(logined_users);
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

const getSpecifiedUser = asyncHandler(async (req, res) => {
  const user = req.params.username;
  try {
    const data = await signUpModel.findOne({ username: user });
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
});


//User Registration
const registerUser = asyncHandler(async (req, res) => { 

  const { fullname, email, password } = req.body;
  const user = await signUpModel.findOne({ email: email });
  if (user) {
    res.status(400);
    throw new Error("user exixts");
  }
  const pass = await bcrypt.hash(password, 10);
  const newRegister = await signUpModel.create({fullname:fullname,email: email,password : pass}); 
  if (newRegister) {
    res.status(200).json({
      _id: newRegister._id,
      fullname: newRegister.fullname,
      email: newRegister.email,
    });
  }
   else {
    res.status(400);
    throw new Error("Error with db");
  }
});



//Login
const login = asyncHandler(async (req, res) => { 

  const {email, password } = req.body;
  const user = await signUpModel.findOne({ email: email });
  if (user) {
   const match =await bcrypt.compare(password,user.password)
   if(match){

    // --- to store the logged-in data ---
    // const newRegister = await loginModel.create({ email:email,fullname:user.fullname});
    // if(newRegister) {

    // // // const token=generateJWT(newRegister._id)

    //   res.status(200).json({
    //     _id: newRegister._id,
    //     fullname: user.fullname,
    //     email: newRegister.email,
    //     token:await jwt(newRegister.email)
    //   });
    //   console.log("Logged in")
    // } else {
    //   res.status(400);
    //   throw new Error("Error with db");
    //   console.log("Error with db");
    // }
    res.status(200).json({
         // _id: newRegister._id,
          fullname: user.fullname,
          email: user.email,
          token:await jwt(user.email)
        });
   }
   else{
    console.log("Entered wrong password");
    res.status(400);
    throw new Error("Entered wrong password");
   
   }
  }
  else{
    console.log("user not registerd");
    res.status(400);
    throw new Error("user not registerd");
  }
});


module.exports.registerUser = registerUser;
module.exports.getUsers = getUsers;
module.exports.getSpecifiedUser = getSpecifiedUser;
module.exports.login=login;
