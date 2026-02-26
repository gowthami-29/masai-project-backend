const supabase=require("../config/supabase.config")
const getFinancialSummary=async(req,res)=>{
    try {
        const userId=req.user.id;
       const {data:incomes,error:incomeError}=await supabase
       .from("incomes")
       .select("amount")
       .eq("user_id",userId)
       if(incomeError) throw incomeError;
       const{data:expenses,error:expenseError}=await supabase
       .from("expenses")
       .select("amount, category")
       .eq("user_id",userId)
       if(expenseError) throw expenseError;
       const totalIncome=incomes.reduce((sum,item)=>sum+Number(item.amount),0);
       const totalExpense=expenses.reduce((sum,item)=>sum+Number(item.amount),0);
       const categoryBreakdown={}
       expenses.forEach((item)=>{
        if(!categoryBreakdown[item.category]){
            categoryBreakdown[item.category]=0;
        }
        categoryBreakdown[item.category]+=Number(item.amount)
       });
       res.json({
        totalIncome,
        totalExpense,
        balance:totalIncome-totalExpense,
        categoryBreakdown
       })
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
        
    }
}
module.exports={getFinancialSummary}