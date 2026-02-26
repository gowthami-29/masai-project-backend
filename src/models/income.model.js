const supabase =require('../config/supabase.config')
//create income
const createIncome=async(income)=>{
    return await supabase
    .from("incomes")
    .insert([income])
    .select()
};
//read
const getIncomeByUser=async(userId)=>{
    return await supabase
    .from("incomes")
    .select("*")
    .eq("user_id",userId)
    .order("created_at",{ascending:false})
}
//update
const updateincomeId=async(id,updates)=>{
    return await supabase
    .from("incomes")
    .update(updates)
    .eq("id",id)
};
//deleete
const deleteIncomeId=async(id)=>{
    return await supabase
    .from("incomes")
    .delete()
    .eq("id",id)
};
module.exports={createIncome,getIncomeByUser,updateincomeId,deleteIncomeId}