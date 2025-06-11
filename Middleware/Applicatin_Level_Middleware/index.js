let  express= require('express');
let app=express();

app.use((req,res,next)=>{
  console.log(`${req.method} and ${req.url}`);
  next();
});

app.get('/',(req,res)=>{
   res.send('<h1>Home Page</h1>')
});
app.get("/Home",(req,res)=>{
  res.send("<h1>Hello Gusy</h1>");
  res.end();
});

app.listen(4000,()=>{
  console.log('server Started..!');
});
