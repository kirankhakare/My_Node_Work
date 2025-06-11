let express=require('express');

let router = express.Router();

router.use((req,res,next)=>{
    console.log(`User Page Info : ${req.url} & ${req.method}`)
    next();
});
router.get('/',(req,res)=>{
  res.send('Welcome to User Dashboard..!');
  res.end();
});

module.exports = router;