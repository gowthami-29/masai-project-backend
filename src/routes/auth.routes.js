const express=require('express')
const { Signup,Login } = require('../controllers/auth.controller')
const route=express.Router()
route.post('/signup',Signup)
route.post('/login',Login)
module.exports=route