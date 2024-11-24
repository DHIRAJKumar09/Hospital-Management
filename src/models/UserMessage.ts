import mongoose ,{Schema ,Document} from 'mongoose';

export interface Message extends Document{
    content:string;
    createAt:Date
}

const MessageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true,
    },
    createAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifyCode:string,
    verifyCodeExpiry:Date,
    isVerified:boolean,
    isAcceptedMessage:boolean,
    messages:Message[]

}

const UserSchema:Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,"username is requried"],
        trim:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,'please use a valid email address']
    },
    password:{
        type:String,
        required:[true,"password is requried"],
    },
    verifyCode:{
        type:String,
        requried:[true,"verifycode is required"],
    },
    verifyCodeExpiry:{
        type:Date,
        required:[true,"verify Code Expiry is required"],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAcceptedMessage:{
        type:Boolean,
        default:true,
    },
    messages:[MessageSchema]


})

const usermodel = (mongoose.models.user as mongoose.Model<User>)|| mongoose.model<User>('user',UserSchema);

export default usermodel;