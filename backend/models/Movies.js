const mongoose =require("mongoose")


const MovieShim = new mongoose.Schema({
    title:{type:String,
        required:true , unique:true
    },
    description:{type:String,
       
    },
    img:{
        type:String,
    },
    imgTitle:{
        type:String,
    },
    imgLogo:{
        type:String,
    },
    trailer:{
        type:String,
    },
    video:{
        type:String,
    },
    year:{
        type:String,
    },
    limit:{
        type:Number,
    },
    genre:{
        type:String,
    },
    isSeries:{type:Boolean,default:false},
    
})
module.exports=mongoose.model("movie",MovieShim)