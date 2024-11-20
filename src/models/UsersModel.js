import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    image:{type:String,default:"https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_1280.jpg"},
    role:{type:String,enum:['vendor','buyer','admin'],required:true}
},{ timestamps: true } );
const Users =  mongoose.models.User ||  mongoose.model('User',userSchema);
export default Users;