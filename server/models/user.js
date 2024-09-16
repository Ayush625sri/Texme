import mongoose, { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const schema = new Schema({
    name:{
        type:String,
        required:true,

    },
    username:{
        type:String,
        unique:true,
        required:true,
    },
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true,
    // },
    password:{
        type:String,
        required:true,
        select: false,
    },
    bio:{
        type:String,

    },
    // phone: {
    //     type:String,
    //     required:true,
    // },
    // dob:{
    //     type:Date,
    //     required:true,
    // },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },  
    },


},{
    timestamps:true
})


schema.pre("save", async function(next){
    if(!this.isModified("password")) next();

    try{
        const saltRound  = await bcrypt.genSalt(10)
        const hash_password = await  bcrypt.hash(this.password, saltRound)
        this.password = hash_password
    }
    catch(error){
        next(error)
    }
})



export const User = mongoose.models.User ||  model("User", schema)