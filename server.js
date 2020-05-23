const express = require("express");
var fs = require("fs");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
console.log("Server is running on http://localhost:" + PORT)
});



app.get("/notes", function(req,res){
res.sendFile(__dirname + "/public/notes.html")
});



app.get("/api/notes",function(req, res){

    //   fs.readFile(__dirname + "/db/db.json", "utf8", (err, data) => {
    //     if (err) throw err;
        
    //     res.json(data)
      });
      
app.get("*",function(req, res){
res.sendFile(__dirname + "/public/index.html")
});



app.post("/api/notes", function(req,res){

     var newNote=req.body
     
savedNotes.push(newNote)
fs.writeFile("./db/db.json",JSON.stringify(savedNotes), (err) =>{
    if (err) throw err;
    console.log("file saved")
});
});

var savedNotes=[];
