const supabase = require("../config/supabase.config");

// CREATE
exports.createRecurringPayment = async (data) => {
  return await supabase.from("recurring_payment").insert([data])
  .select()
};

// GET ALL
exports.getRecurringPayments = async () => {
  return await supabase.from("recurring_payment").select("*");
};

// UPDATE
exports.updateRecurringPayment = async (id, data) => {
  return await supabase
    .from("recurring_payment")
    .update(data)
    .eq("id", id)
    .select()
};

// DELETE
exports.deleteRecurringPayment = async (id) => {
  return await supabase
    .from("recurring_payment")
    .delete()
    .eq("id", id);
};

// GET DUE PAYMENTS (for scheduler)
exports.getDuePayments = async (today) => {
  return await supabase
    .from("recurring_payment")
    .select("*")
    .lte("next_run_date", today)
    .eq("status", "active");
};