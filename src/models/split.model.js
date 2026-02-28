const supabase=require('../config/supabase.config')
const createSplit=async (data)=>{
    return await supabase
    .from("expense_splits")
    .insert([data])
    .select();
};
const getSplit=async(use_id)=>{
    return await supabase
    .from("expense_splits")
    .select("*")
    .eq("user_id",use_id)

};
const deleteSplit=async(id,user_id)=>{
    return await supabase
    .from("expense_splits")
    .delete()
    .eq("id",id)
    .eq("user_id",user_id)
};
module.exports={createSplit,getSplit,deleteSplit}