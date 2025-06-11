let express = require("express");

let app=express();

//set ejs as template engine..
app.set('view engine','ejs');

let stud={
   name:"kiran",
   email:"kiran@gmail.com",
   contact:"8767192113",
   marks : [84,85,95,98,80]
};

app.get('/',(req,res)=>{
     res.render("first.ejs",stud);
});


app.listen(3000,()=>{
    console.log("Server started.!");
});