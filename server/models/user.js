const mongoose=require('mongoose')

const UserSchema= mongoose.Schema({
    username:{
        type:String,
        
    },
    email:{
        type:String,
        required:true,
    },
    password :{
        type:String,
        require:true,
    }


})

module.exports=mongoose.model('User',UserSchema);