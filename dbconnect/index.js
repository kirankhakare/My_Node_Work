//Complete CRUD Opertion By Using Node & MYSQL...

let mysql=require("mysql");


let conn = mysql.createConnection({
	host:"localhost",
    	user:"root",
 	password:"Kiran@123",
	database:"ss"
});

conn.connect((err)=>{
   	if(err){
		console.log("Error is " + err);
	}else{
		console.log("Database is connected");
        }
});

/*runtime parameter : insert in database table - 
let eid=2;
let ename="Shivani";
let dept="Bank";
let salary="500000";
let date='2025-05-01';

conn.query("insert into ss values(?,?,?,?,?)",[eid,ename,dept,salary,date] ,(err,result)=>{
	if(err){
             console.log("Operation Failed.."+err);
        }else{
             console.log("Record Save : " + result);
        }
});
*/

/*Update the recored from databse table - 

ename="Eknath";
eid=1;

conn.query("update ss set name=? where Emp=?",[ename,eid],(err,result)=>{
    if(err){
         console.log("Operation Failed " + err);
    }else{
        console.log("Record Updated Successfully..! "+result);
    }
});

*/

//Delete the recored : 

eid = 2;

conn.query("delete from ss where Emp=? ",[eid], (err,result)=>{
	if(err){
             console.log("Operation Failed " + err);
        }else{
             console.log("Record deleted success.." + result);
        }
});

conn.query("select * from ss", (err,result)=>{
	if(err){
		console.log("Operation Failed "+ err);
	}else{
                console.log(result);
        }
});