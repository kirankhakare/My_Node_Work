let express = require('express');
let router = express.Router();

router.use((req,res,next)=>{
   console.log(`admin page url : ${req.url}`);
   next();
});

router.get('/',(req,res)=>{
    console.log('hello admin');
    res.send('<h1>Welcome to the Admin Page..!</h1>');
    res.end();
});

module.exports = router;