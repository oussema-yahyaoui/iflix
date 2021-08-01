const mongoose =require("mongoose")


const listShim = new mongoose.Schema({
    title:{type:String,
        required:true , unique:true
    },
    type:{type:String
       
    },
    genre:{type:String
    
    },
    content:{type:Array}
    
    
})
module.exports=mongoose.model("list",listShim)
