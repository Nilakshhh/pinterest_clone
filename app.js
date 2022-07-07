//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req,res){
    res.redirect("/create");
})

app.get("/create", function(req,res){
    res.sendFile(__dirname + "/create.html");
})


app.listen(3000 || process.env.PORT, function(){
    console.log("app started on port 3000");
})