const {createBudget,getBudgets,updateBudget,deleteBudget} =require( '../models/budget.model')
//add
 const addBudget= async(req,res)=>{
    try {
        const user_id=req.user.id;
        const {category,amount,month}=req.body
        if(!category ||!amount ||!month){
            return res.status(400).json({
                status:false,
                message:"all fields are required"
            })
        }
        const {data,error}=await createBudget({
            user_id,
            category,
            amount,
            month
        })
        if(error) return res.status(400).json(error)
        res.status(201).json({
            status:true,
         message:data})
    } catch (error) {
        res.status(400).json({
            status:false,
            message:error.message
        })  
    }
};
//get
 const getAllBudgets=async(req,res)=>{
    try {
        const {data,error}=await getBudgets(req.user.id)
        if(error) return  res.status(400).json(error)
            res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            status:false,
            message:error.message
        })
    }
}
//update
 const updateBudgets=async(req,res)=>{
    try {
        const {id}=req.params;
        const {data,error}=await updateBudget(id,req.body);
        if(error) return res.status(400).json(error)
            res.json({
        statu:true,
    data})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

 const deleteBudgets=async(req,res)=>{
    try {
        const {id}=req.params
        const {error}=await deleteBudget(id);
        if(error) return res.status(400).json(error)
            res.json({message:"buget deleted sucessfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports ={addBudget,getAllBudgets,updateBudgets,deleteBudgets}