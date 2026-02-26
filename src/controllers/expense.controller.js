const {createExpense,getExpenseByUser,deleteExpenses, filterExpenses, getExpenseSummary, getmonthlySummary}=require('../models/expense.model')
//add expenses
const addExpense=async(req,res)=>{
    try {
        const {title,amount,category,note,tags}=req.body;
        if(!title ||!amount ||!category){
            return res.status(400).json({
                status:false,
                message:"title, amount, category required"
            })
        }
        const expense=await createExpense({
            title,
            amount,
            category,
            note,
            tags:tags || [],
            user_id:req.user.id
        })
        res.status(201).send({
            status:true,
            message:"expense added",expense
        })
    } catch (error) {
        res.status(500).send({
            status:"failed",
            error:error.message
        })
    }
}

//get logged user's expenses
const getExpense=async(req,res)=>{
    try {
        const expenses=await getExpenseByUser(req.user.id);
        res.json(expenses)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//delete expense
const removeExpense=async (req,res)=>{
    try {
        await deleteExpenses(req.params.id,req.user.id)
        res.json({
            status:true,
            message:"expenses deleted"
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//filter
const filterExpenseController=async (req,res)=>{
    try {
        const filters=req.query;
        const expenses=await filterExpenses(
            req.user.id,
            filters
        );
        res.json(expenses)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//expense summary
const expenseSummary=async (req,res)=>{
    try {
        const summary=await
        getExpenseSummary(req.user.id);
        res.json(summary);
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


//monthly
const monthlySummary=async (req,res)=>{
    try {
        const summary=await
        getmonthlySummary(req.user.id);
        res.json(summary)
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports={addExpense,getExpense,removeExpense,filterExpenseController,expenseSummary,monthlySummary}