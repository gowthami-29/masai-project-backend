const { createSplits, getSplits, deleteSplits } = require('../controllers/split.controller')
const authenticate=require('../middleware/auth.middleware')
const express=require("express")
const router=express.Router()

router.post("/",authenticate,createSplits)
router.get("/",authenticate,getSplits)
router.delete("/:id",authenticate,deleteSplits)
module.exports=router;