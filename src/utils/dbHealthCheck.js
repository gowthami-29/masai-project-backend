const supabase =require("../config/supabase.config")
const dbConnectionCheck=async()=>{
    try {
        const {error}=await supabase
        .from("users")
        .select()
        .limit(1)
        if(error){
            console.log("database connection failed");
            process.exit(1)
        }
        console.log(("database connected sucessfully"));
        
    } catch (error) {
        console.log("error occured while connecting to database");
        
    }
}
module.exports=dbConnectionCheck;