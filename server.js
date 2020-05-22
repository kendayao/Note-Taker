const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
console.log("Server is running on http://localhost:" + PORT)
});


app.get("/",function(req, res){
res.sendFile(__dirname + "/index.html")
});

app.get("/notes", function(req,res){
res.sendFile(__dirname + "/notes.html")
});