let express=require('express');
let app=express();

let routes = express.Router();

routes.use((req,res,next)=>{
  console.log(`Accessing the dashboard : ${req.url}`);
  next();
});

routes.get('/dashboard',(req,res)=>{
    res.send('Dashboard Portal...');
});

app.use('/admin',routes);

app.listen(4000,()=>{
   console.log('Server Started ... ')
});