const mongoose = require('mongoose');
const express =require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('serverstarted on port ');
});
const reg=require("../backend/schema");
mongoose.connect('mongodb://0.0.0.0:27017/ClickMart')
.then((x) => {

console.log(`data base connect to :"${x.connections[0].name}"`)
})


app.post('/reg',(req,res)=>
{
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const email1=req.body.email1;
    const mobileno=req.body.mobileno;
    const birthdate=req.body.birthdate;
    const gender=req.body.gender;
    const address=req.body.address;
    const password1=req.body.password1;
    const confirm=req.body.confirm;

    const data=new reg({
        firstname:firstname,
        lastname:lastname,
        email1:email1,
        mobileno:mobileno,
        birthdate:birthdate,
        gender:gender,
        address:address,
        password1:password1,
        confirm:confirm,
    });
    console.log(data);
    data.save()
    .then(x=>{
        res.send('record save');
    })

});

app.get("/viewuser",(req,res)=>
{
reg.find({})
.then(result=>res.json(result))
.catch(err=>console.log(err));
})






app.listen(10000, () => {

    console.log("server started on port 8000");
    
    }) 
