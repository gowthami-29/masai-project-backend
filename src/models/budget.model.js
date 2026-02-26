const supabase =require('../config/supabase.config')
//create budget
const createBudget= async(budgetData)=>{
    return await supabase
    .from("budgets")
    .insert([budgetData])
    .select()
}
 const getBudgets=async(user_id)=>{
    return await supabase
    .from("budgets")
    .select("*")
    .eq("user_id",user_id)
};
//update budget
 const updateBudget= async(id,data)=>{
    return await supabase
    .from("budgets")
    .update(data)
    .eq("id",id)
    .select()
   
}

 const deleteBudget=async(id)=>{
    return await supabase
    .from("budgets")
    .delete()
    .eq("id",id)
}
module.exports={createBudget,updateBudget,getBudgets,deleteBudget}