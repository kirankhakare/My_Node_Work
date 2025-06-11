let express = require('express');
let app=express();

//Import the page..
let userPage=require('./router/user');
let adminPage=require('./router/admin');

//use the page..
app.use('/admin',adminPage);
app.use('/user',userPage);

//Error handling Middleware
app.use((err,req,res,next)=>{
   console.error('Error Handler : ' , err.message);
   res.status(err.status || 500).json({
    success:false,
    message:err.message || 'Internal Server Error',
    path:req.originalUrl,
    method:req.method,
    timestamp:new Date().toISOString()
   });
});

app.listen(4000,()=>{
    console.log('Start server..!')
});