const express = require("express");
const app =express();
app.listen(8081);
app.use(express.json());
console.log("Server started");
/*app.get("/",
function(req,res){
	res.send("Hii normal function")
});*/
app.get("/", (req,res) => res.send("hi arrow function"));
const EmployeeRouter = require("./employeeRouter");
app.use("/employees",EmployeeRouter.getRouter());
