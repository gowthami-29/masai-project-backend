const cron = require("node-cron");
const supabase = require("../config/supabase.config");
const recurringModel = require("../models/recuring.model");

const getNextDate = (date, frequency) => {
  let d = new Date(date);

  if (frequency === "daily") d.setDate(d.getDate() + 1);
  if (frequency === "weekly") d.setDate(d.getDate() + 7);
  if (frequency === "monthly") d.setMonth(d.getMonth() + 1);

  return d.toISOString();
};

const startScheduler = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("Checking recurring payments...");

    const today = new Date().toISOString().split("T")[0];

    const { data: payments } =
      await recurringModel.getDuePayments(today);

    if (!payments) return;

    for (let payment of payments) {

      // create expense automatically
      await supabase.from("expenses").insert([
        {
          title: payment.title,
          amount: payment.amount,
          category: payment.category,
          date: new Date()
        }
      ]);

      // update next date
      const nextDate = getNextDate(
        payment.next_run_date,
        payment.frequency
      );

      await supabase
        .from("recurring_payments")
        .update({ next_run_date: nextDate })
        .eq("id", payment.id);
    }
  });
};

module.exports = startScheduler;