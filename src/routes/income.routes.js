const express=require("express")
const router=express.Router()
const authenticate=require('../middleware/auth.middleware')
const { addIncome, getIncome, updateIncome, deleteIncome } = require("../controllers/income.controller")
router.post('/',authenticate,addIncome)
router.get("/",authenticate,getIncome)
router.put("/:id",authenticate,updateIncome)
router.delete("/:id",authenticate,deleteIncome)
module.exports=router