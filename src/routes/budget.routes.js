const express =require('express')
const { addBudget, deleteBudgets, getAllBudgets, updateBudgets } =require("../controllers/budget.controller");
const authenticate=require('../middleware/auth.middleware')

const router=express.Router()
router.post("/",authenticate,addBudget)
router.get("/",authenticate,getAllBudgets)
router.put("/:id",authenticate,updateBudgets)
router.delete("/:id",authenticate,deleteBudgets)
module.exports=router