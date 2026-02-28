const { createSplit, getSplit, deleteSplit } = require("../models/split.model");


const createSplits=async(req,res)=>{
    try {
        const {expense_id,total_amount,split_type,participants}=req.body;
        const user_id=req.user.id
        const{data,error}=await createSplit({
            user_id,
            expense_id,
            total_amount,
            split_type,
            participants
        })        
        if(error) throw error;
        res.status(201).json({
            sucess:true,
            message:data})
    } catch (error) {
        res.status(500).json({
            status:false,
            error:error.message
        })
    }
}

//getsplt
const getSplits= async (req,res)=>{
    try {
        const user_id=req.user.id;
        const {data,error}=await getSplit(user_id)
        if(error) throw error
        res.json({message:data})
    } catch (error) {
        res.status(500).json({
            error:error.message
        })
    }
};
 const deleteSplits=async(req,res)=>{
    try {
        const {id}=req.params
        const user_id=req.user.id
        const {data,error}=await deleteSplit(id,user_id);
        console.log(data);
        
        if(error) throw error
        res.json({
            message:"deleted sucessfully"
        })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }
 module.exports={createSplits,getSplits,deleteSplits}