const { createIncome,getIncomeByUser, updateincomeId,deleteIncomeId} = require("../models/income.model");


const addIncome=async(req,res)=>{
    try {
        const {amount ,source,description}=req.body
        const userId=req.user.id;
        const {data,error}=await createIncome({
            amount,
            source,
            description,
            user_id:userId
        });
        if(error) return res.status(400).json({error:error.message})
            res.json({
        status:true,
    message:data})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
const getIncome = async (req, res) => {
  try {
    
    const { data, error } = await getIncomeByUser(req.user.id);

    if (error) return res.status(400).json({ error: error.message });

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({
      status:false,
       error: err.message });
  }
};

const updateIncome = async (req, res) => {
  try {
    const id = req.params.id;

    const { data, error } = await  updateincomeId(id, req.body);

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteIncome = async (req, res) => {
  try {
    const id = req.params.id;

    const { error } = await deleteIncomeId(id);

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: "Income deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports={addIncome,getIncome,updateIncome,deleteIncome}