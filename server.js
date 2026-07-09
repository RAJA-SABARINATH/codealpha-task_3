const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname)));


// Home page
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
});


// Alerts API
app.get("/alerts",(req,res)=>{
    res.sendFile(path.join(__dirname,"alerts.json"));
});


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});