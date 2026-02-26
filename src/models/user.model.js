const supabase=require('../config/supabase.config')
const findUserByEmail= async(email)=>{
    const {data,error}=await supabase
        .from("users")
        .select()
        .eq("email",email)
        .maybeSingle()
        if(error) throw error;
        return data
}
const createUser=async(payload)=>{
    const {data,error}=await supabase
    .from("users")
    .insert(payload)
    .select("name,email")
    if(error) throw error;
    return data
}
module.exports={findUserByEmail,createUser}