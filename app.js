const express =require('express');
const app = express();
const port=5500
const dbConnection=require("./dbConfigaration/config")

//register route
app.post("api/user/register",(req,res)=>{
    res.send("register user")
})

//login user
app.post("/api/users/login",(req,res)=>{
    res.send("login user")
})

//check user
app.get("/api/users/check",(req,res)=>{
    res.send("check user")
})
async function start(params) {
    try {
    console.log("Connecting to the database...");
    const result = await dbConnection
      .execute("select 'test'")
      

    console.log("Database connection result:", result);
    console.log("Starting server...");
    app.listen(port);
    console.log("Database connection established");
    console.log(`Listening to http://localhost:${port}`);
} catch (error) {
    console.error("Error occurred:", error); // Use error instead of error.message
}


    
}


start();


