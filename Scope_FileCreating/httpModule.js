let http=require("http");

http.createServer((req,res)=>{
  res.write("WelCome the first web page using node..!")
  res.end();
}).listen(4000,function(){
  console.log("server start..!")
});