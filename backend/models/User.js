const mongoose =require("mongoose")


const UserSHE = new mongoose.Schema({
    username:{type:String,
        required:true , unique:true
    },
    email:{type:String,
        required:true , unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{type:String,
        defaul:""
    },
    isAdmin:{type:Boolean,default:false}
})
module.exports=mongoose.model("user",UserSHE)