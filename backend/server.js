const mongoose = require('mongoose');
const express =require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('serverstarted on port ');
});



app.listen(5000, () => {

    console.log("server started on port 5000");
    
}) 

