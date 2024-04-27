const mongoose=require('mongoose');
const schema=mongoose.Schema;

let ClickMart=new schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
     email1:{
        type:String
    },
     mobileno:{
        type:String
    },
     birthdate:{
        type:String
    },
     gender:{
        type:String
    },
    address:{
        type:String
    },
    password1:{
        type:String
    },
    confirm:{
        type:String
    },

},
{
    collection:'Register'
}
)
module.exports=mongoose.model("Register",ClickMart);