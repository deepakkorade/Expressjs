const express= require("express");
const dk= express();
const path = require("path");

const port= 8100;

dk.set("view engine", "ejs");
dk.set("Views",path.join(__dirname,"Views"));

dk.get("/",(req,res)=>{
    res.render("home.ejs");
});

dk.listen(port,()=>{
    console.log(`listening on port ${port}`);
});