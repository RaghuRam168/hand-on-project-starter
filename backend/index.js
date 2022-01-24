const express = require('express')
const mongoose = require('mongoose')
const app=express()
const dotenv = require('dotenv')
const routerUrl = require('./Routes/routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
// app.use('/',(req,res) => {
//     res.send("<h1>hello</h1>")
// })
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("Connected to data base"))
app.get('/',(req,res)=>{
    res.send("<h1>Raghu</h1>");
})
app.use('/api',routerUrl)
app.listen(4000,() => console.log("Running"))
