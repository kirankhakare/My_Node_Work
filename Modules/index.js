//1. Built-in Modules ...

const os =require("os");
const path =require("path");

console.log("System info..!")
console.log(os.platform());
console.log(os.freemem());

const myPath=path.join(__dirname,"public","demo.html");
console.log("Example With Path Folder : " + myPath);

