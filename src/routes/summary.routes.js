const express =require('express')

const authenticate=require('../middleware/auth.middleware')
const { getFinancialSummary } = require('../controllers/summary.controller')

const router=express.Router()

router.get("/",authenticate,getFinancialSummary)
module.exports=router;