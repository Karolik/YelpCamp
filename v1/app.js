var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.send("Hi There");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started");
});
