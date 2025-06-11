let express=require('express');
let app=express();

app.use((req,res,next)=>{
   console.log(`${req.method} And ${req.url}`)
   next();
});

app.get('/',(req,res)=>{
    res.send("<h1>Application Level Middleware</h1>")
    res.end();
});

app.listen(4000,()=>{
  console.log('server start..!')
});