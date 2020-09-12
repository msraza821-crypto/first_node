const express=require("express")
const bodyParser=require("body-parser")

const app=express();

app.get('/', (req, res) => res.json({name:"Md SHabbbir Raza",age:"19", Gender :"Male"}));

// app.use("/",)
app.listen(3100,()=>{
console.log("app is listing on port 3100")
})