const supabase=require('../config/supabase.config')
//create expenses
const createExpense=async (payload)=>{
    const {data,error}=await supabase
    .from("expenses")
    .insert(payload)
    .select()
    .single()
    if(error) throw error;
    return data;
}
//get all expenses of logged user
const getExpenseByUser=async (userId)=>{
    const {data,error}=await supabase
    .from("expenses")
    .select("*")
    .eq("user_id",userId)
    if(error) throw error;
    return data
};
//delete expenses
const deleteExpenses=async (expenseId,userId)=>{
    const {data,error}=await supabase
    .from("expenses")
    .delete()
    .eq("id",expenseId)
    .eq("user_id",userId);
    if(error) throw error;
    return data
};

//filter 
const filterExpenses= async (userId,filters)=>{
    let query=supabase
    .from("expenses")
    .select("*")
    .eq("user_id",userId)
    if(filters.category){
        query=query.eq("category",filters.category);
    }
    if(filters.tags){
        query=query.contains("tags",[filters.tags])
    }
    const {data,error}=await query;
    if(error) throw error;
    return data;
}

//summary
const getExpenseSummary=async(userId)=>{
    const {data,error}=await supabase
    .from("expenses")
    .select("amount, category")
    .eq("user_id",userId)
    if(error) throw error
    let total=0;
    let categorySummary={}
    data.forEach((item)=>{
        total+=Number(item.amount)
        if(!categorySummary[item.category]){
            categorySummary[item.category]=0;
        }
        categorySummary[item.category] +=Number(item.amount)
    });
    return{
        total,
        categorySummary
    }

}

//monthly
const getmonthlySummary=async(userId)=>{
    const {data,error}=await supabase
    .from("expenses")
    .select("amount, created_at")
    .eq("user_id",userId)
    if(error) throw error;
    let monthlySummary={};
    data.forEach((item)=>{
        const month=new Date(item.created_at).toLocaleString("default",{
            month: "long",
            year:"numeric"
        })
        if(!monthlySummary[month]){
            monthlySummary[month]=0;
        }
        monthlySummary[month]+=Number(item.amount)
    })
    return monthlySummary
}

module.exports ={
    createExpense,getExpenseByUser,deleteExpenses,filterExpenses,getExpenseSummary,getmonthlySummary
}