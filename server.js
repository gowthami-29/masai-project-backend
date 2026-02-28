require('dotenv').config()
const express =require('express')
const dbConnectionCheck=require('./src/utils/dbHealthCheck')
const authRoutes=require('./src/routes/auth.routes')
const expenseRoutes=require('./src/routes/expense.routes')
const budgetRoutes =require('./src/routes/budget.routes')
const incomeRoutes=require("./src/routes/income.routes")
const recuringRoutes=require("./src/routes/recuring.routes")
const startScheduler =require("./src/utils/recuring.scheduler")
const splitRoutes=require("./src/routes/split.routes")
const summaryRoutes=require("./src/routes/summary.routes")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 4000
app.use('/api',authRoutes)
app.use('/api/expenses',expenseRoutes)
app.use('/api/budget',budgetRoutes)
app.use('/api/income',incomeRoutes)
app.use("/api/recuring",recuringRoutes)
app.use("/api/split",splitRoutes)
app.use("/api/summary",summaryRoutes)
startScheduler();
app.listen(PORT,async()=>{
    try {
        await dbConnectionCheck()
        console.log(`server is running on port ${PORT}`)
    } catch (error) {
        console.log("error occured while starting our server");
        
    }
})
