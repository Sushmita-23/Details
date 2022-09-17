const express = require('express');
const app = express();
const bodyParser = require("body-parser"); 
const mysql = require("mysql2");
const cors = require("cors");

const db =mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Sush23mysql",
    database: "crudb",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get/:id",(req,res) =>
 { 
    const {id} = req.params;
    const sqlGet = "SELECT * FROM crudb WHERE id = ?";
    db.query(sqlGet,id, (error, result)=>{
        if(error){
            console.log(error);
        }
     res.send(result);
});
 });

 app.put("/api/update/:id", (req,res) =>
 { const {id} = req.params;
    const {name,email,contact} = req.body;
const sqlUpdate = "UPDATE crudb SET name = ?, email = ?, contact = ? WHERE id=?";
db.query(sqlUpdate, [name,email,contact,id], (error, result)=>{
    if(error){
        console.log(error);
    }
    res.send(result);
});
 });

 
 app.delete("/api/remove/:id",(req,res) =>
 { 
    const {id} = req.params;
const sqlRemove = "DELETE FROM crudb WHERE is=?";
db.query(sqlRemove,id, (error, result)=>{
    if(error){
        console.log(error);
    }
});
 });
 

 app.get("/",(req,res) => {

 });
 
app.listen(5000, () => {
    console.log("Running on port 5000");
});