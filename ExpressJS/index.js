let express = require("express");
let app = express();
let path = require("path");
let subPath= path.join(__dirname,"public");

app.use(express.static(subPath));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.sendFile(subPath + "/register.html");
});

/*
app.get("/save",(req,res)=>{
  let n=req.query.name;
  let e=req.query.email;
  let c=req.query.contact;
  res.send(n+" "+e+" "+c);
  res.end();
});*/


app.post("/save",(req,res)=>{
  let n=req.body.name;
  let e=req.body.email;
  let c=req.body.contact;
  res.send(n+" "+e+" "+c);
  res.end();
});

app.listen(4000,()=>{
  console.log("server start..!")
});