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
   
  
      fs.readFile(__dirname + "/db/db.json", "utf8", (err, notes) => {
        if (err) throw err;
        var parseData= JSON.parse(notes)
        return res.json(parseData)
        
      });
      });
      
app.get("/",function(req, res){
res.sendFile(__dirname + "/public/index.html")
});



app.delete("/api/notes/:id", function(req,res){
    var noteId = req.params.id;
    
    
    

    fs.readFile(__dirname + "/db/db.json", "utf8", (err, notes) => {
        if (err) throw err;

        var parseData= JSON.parse(notes)
        
        savedNotes=parseData.filter(function(num){
            
            return num.id!=noteId;
            
        });
        
        fs.writeFile(__dirname + "/db/db.json",JSON.stringify(savedNotes), (err) =>{
            if (err) throw err;   
            
        });
        res.send("something")
    });



});

var savedNotes=[];
app.post("/api/notes", function(req,res){
   
  var newNote=req.body
 
    var id = 1
    newNote.id=id
savedNotes.push(newNote)

var counter = 1
for (var i=0; i < savedNotes.length; i++){
    savedNotes[i].id = counter++;
}


fs.writeFile(__dirname + "/db/db.json",JSON.stringify(savedNotes), (err) =>{
    if (err) throw err;   
});
res.send("something")
});


