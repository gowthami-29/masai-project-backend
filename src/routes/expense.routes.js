const express =require('express')
const authenticate=require('../middleware/auth.middleware')
const { addExpense, getExpense, removeExpense, filterExpenseController, expenseSummary, monthlySummary } = require('../controllers/expense.controller')
const router=express.Router()
//add expense
router.post("/",authenticate,addExpense)
router.get("/",authenticate,getExpense)
router.delete("/:id",authenticate,removeExpense)
router.get("/filter",authenticate,filterExpenseController)
router.get("/summary",authenticate,expenseSummary)
router.get("/monthly-summary",authenticate,monthlySummary)
module.exports=router;