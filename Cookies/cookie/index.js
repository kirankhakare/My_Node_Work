const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser()); //middleware 

//set a cookie
app.get('/setCookie',(req,res)=>{
  res.cookie('username','Kiran',{
    maxAge:60*60*24*365,
    httpOnly:true
  });
  res.send('Cookie has been set!');
});
//Read a cookie
app.get('/read',(req,res)=>{
  const username = req.cookies.username;
  res.send('Username cookie : ' + username);
});

app.listen(4000,()=>{
  console.log('Server Started.. at http://localhost:4000');
});