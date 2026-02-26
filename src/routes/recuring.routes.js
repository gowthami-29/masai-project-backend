const authenticate=require('../middleware/auth.middleware')
const express = require("express");
const router = express.Router();

const {
  createRecurring,
  getRecurring,
  updateRecurring,
  deleteRecurring
} = require("../controllers/recuring.controller");

router.post("/",authenticate,createRecurring);
router.get("/", authenticate,getRecurring);
router.put("/:id",authenticate, updateRecurring);
router.delete("/:id",authenticate,deleteRecurring);

module.exports = router;