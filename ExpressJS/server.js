let express = require("express");

let app = express();

app.get("",(req,res)=>{
    res.send("<h1>Welcome First Express Web Page..!</h1>")
});

app.get("/save",(req,res)=>{
  res.send("<h1>This is second page.!</h1>")
});

app.listen(5000,()=>{
  console.log("Server Start..!")
});