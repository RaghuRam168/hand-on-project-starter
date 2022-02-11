const express = require("express");
const NewApiModel = require("../Models/NewApiModel");
const asyncHandler = require("express-async-handler");
const { findOne } = require("../Models/loginModel");

//Add api
const addApi = asyncHandler(async (req, res) => {
  const { apiName, apiEndPoint, description, public, author } = req.body;
  const api = await NewApiModel.findOne({ apiName: apiName });
  if (api) {
    res.status(201).json({
      message: "API already Exists",
    });
  } else {
    const createApi = await NewApiModel.create({
      apiName: apiName,
      apiEndPoint: apiEndPoint,
      description: description,
      public: public,
      author: author,
    });
    if (createApi) {
      res.status(200).json({
        _id: createApi._id,
        apiName: createApi.apiName,
        apiEndPoint: createApi.apiEndPoint,
        description: createApi.description,
        public: createApi.public,
        author: createApi.author,
      });
    } else {
      res.status(500);
      throw new error("Server error or database error");
    }
  }
});

//Fetch all APIs of the given user
const fetchAPI = asyncHandler(async (req, res) => {
  const { author } = req.body;
  const data = await NewApiModel.find({ author: author });
  if (data) {
    
    res.status(200).json(data);
  } else {
    res.status(201).json({ message: "No records Found" });
  }
});

//Fetch all APIs for dashboard

const fetchAll = asyncHandler (async(req,res) => {
  const data = await NewApiModel.find();
  if(data){
    res.status(200).json(data);
  }
  else{
    res.status(201).json({message:"No records found"})
  }
})
 
//Fetch specified API
const fetchSpedifiedApi = asyncHandler(async(req,res)=>{
  const {id} = req.body
  const data = await NewApiModel.find({_id:id})
  if(data)
  {
    res.status(200).json(data)
  }
  else{
    res.status(400)
  }
})

//delete API
const deleteAPI = asyncHandler(async (req, res) => {
  const { apiName } = req.body;
  const data = await NewApiModel.findOne({ apiName: apiName });
  if (data) {
    const isDeleted = await NewApiModel.deleteOne({ apiName: apiName });
    if (isDeleted) {
      res.status(200).json({
        message: "Deleted successfully",
      });
    } else {
      res.status(400);
      throw new Error("Error with database");
    }
  } else {
    res.status(400);
    throw new Error("Record not found");
  }
});

//Update API

const updateAPI = asyncHandler(async (req, res) => {
  const { prevName, NewName, apiEndPoint, description,public } = req.body;
  const data = await NewApiModel.findOne({ apiName: NewName });
  if (data && prevName !== NewName) {
    res.status(200).json({
      message: "API name already exist , try other one",
    });
  } 
  else {

    const updated = await NewApiModel.updateOne({ apiName: prevName },{
        apiName:NewName,
        apiEndPoint:apiEndPoint,
        description:description,
        public:public
      })
    if(updated){
        // res.status(200).json({
        //     _id:updated._id,
        //     apiName:updated.apiName,
        //     apiEndPoint:updated.apiEndPoint,
        //     description:updated.description

        // })
         res.status(200).json(updated)
    }
    else{
        res.status(400)
        throw new Error("Error with server")
    }
  }
});

exports.addApi = addApi;
exports.fetchAPI = fetchAPI;
exports.deleteAPI = deleteAPI;
exports.updateAPI=updateAPI;
exports.fetchAll=fetchAll;
exports.fetchSpedifiedApi=fetchSpedifiedApi;