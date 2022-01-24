const express = require('express')
const router = express.Router()
const users = require('../controllers/users')
//const signUpTemplateCopy = require('../Models/signUpModel')
//const loginModel = require('../Models/loginModel')

// router.post('/signup',(req,res) => {
  
//     const signedUser=new signUpTemplateCopy({
//         fullname:req.body.fullname,
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password,
//     })
//     signedUser.save()
//     .then(data=>{
//         res.json(data)
//         console.log(data)
//     })
//     .catch(error =>{
//         res.json(error)
//         console.log(error)
//     })

// })

// router.post('/login',(req,res) => {
  
//     const signedUser=new loginModel({
//         username:req.body.username,
//         password:req.body.password,
//     })
//     signedUser.save()
//     .then(data=>{
//         res.json(data)
//         console.log(data)
//     })
//     .catch(error =>{
//         res.json(error)
//         console.log(error)
//     })

// })

//router.get('/users',users.getUsers);
router.route('/users').get(users.getUsers)
router.get('/:username',users.getSpecifiedUser);

//router.route('/signup').post(users.signup)
router.route('/register').post(users.registerUser)
router.route('/login').post(users.login)
router.get('/account',(req,res) => {
    res.send("<h1>Account</h1>")
})
module.exports=router