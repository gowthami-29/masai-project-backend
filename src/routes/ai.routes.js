const express =require('express')
const  {getAIInsights}= require("../controllers/ai.controller")
const router=express.Router()
router.post("/insights",getAIInsights)
module.exports=router;