const express= require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
    var height=Number(req.body.h);
    var weight=Number(req.body.w);
    var bmi=weight/(height*height);
   
    res.send("your bmi is "+bmi);
});


app.listen("3000",function(){
    console.log("sever at 3000");
});