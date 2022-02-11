const mongoose = require('mongoose')
const NewApiModel = mongoose.Schema({
    apiName:{
        type:String,
        required:true,
        unique:true
    },
    apiEndPoint:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    public:{
        type:Boolean,
        default:false
    },
    author:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('API',NewApiModel)