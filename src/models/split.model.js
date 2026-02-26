const supabase=require('../config/supabase.config')
const createSplit=async (data)=>{
    return await supabase
    .from("expense_splits")
    .insert([data])
    .select();
};
const getSplit=async()=>{
    return await supabase
    .from("expense_splits")
    .select("*")

};
const deleteSplit=async(id)=>{
    return await supabase
    .from("expense_splits")
    .delete()
    .eq("id",id)
};
module.exports={createSplit,getSplit,deleteSplit}