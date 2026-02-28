const recurringModel = require("../models/recuring.model");

// CREATE
exports.createRecurring = async (req, res) => {
  try {
    const {title, amount, category, frequency, start_date } = req.body;
    const user_id=req.user.id
    const { data, error } =
      await recurringModel.createRecurringPayment({
        user_id,
        title,
        amount,
        category,
        frequency,
        start_date,
        next_run_date: start_date,
        status: "active"
      });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getRecurring = async (req, res) => {
  try {
     const user_id=req.user.id;
  const { data, error } = await recurringModel.getRecurringPayments(user_id);
  if (error) return res.status(500).json(error);
  res.json(data)
    
  } catch (error) {
     res.status(500).json({
      error:error.message
     })
};
    
  }
   


 

// UPDATE
exports.updateRecurring = async (req, res) => {
  const { id } = req.params;

  const { data, error } =
    await recurringModel.updateRecurringPayment(id, req.body);

  if (error) return res.status(500).json(error);

  res.status(200).json(data);
};

// DELETE
exports.deleteRecurring = async (req, res) => {
  const { id } = req.params;

  const { error } =
    await recurringModel.deleteRecurringPayment(id);

  if (error) return res.status(500).json(error);

  res.json({ message: "Deleted" });
};