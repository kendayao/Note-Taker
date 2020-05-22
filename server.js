const express = require("express");
var fs = require("fs");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
console.log("Server is running on http://localhost:" + PORT)
});



app.get("/notes", function(req,res){
res.sendFile(__dirname + "/notes.html")
});

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html")
    });

app.get("/api/notes",function(req, res){
   
      
      fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data)
        res.json(data)
      });
     
});