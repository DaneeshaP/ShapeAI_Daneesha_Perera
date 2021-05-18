const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
  console.log(req.body.num1);
  res.send("Thanks for posting the form");
});


app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
