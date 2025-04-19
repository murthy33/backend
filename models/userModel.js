const mongoose=require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please give username"]
    },
    email:{
        type:String,
        required:[true,"Please give email"],
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:[true,"Please give password"]
    }
},
{
    timestamps:true,
})

module.exports=mongoose.model("User",userSchema);