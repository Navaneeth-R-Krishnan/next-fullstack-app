import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content: string,
    createdAt: Date
}

export interface User extends Document{
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean,
    isAcceptingMessage: boolean;
    messages: Message[]
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required : true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

const UserSchema: Schema<User> = new Schema({
    username:{
        type: String,
        required: [true, "Username required"],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: [true,"Email is required"],
        match: [/.+\@.+\..+/,"Enter valid mail id"]
    },
    password:{
        type: String,
        required: [true,"Password is required"],
    },
    verifyCode:{
        type: String,
        required: [true,"Code is required"],
    },
    verifyCodeExpiry:{
        type: Date,
        required: [true,"Code is required"],
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAcceptingMessage:{
        type: Boolean,
        default: true
    },
    messages:[MessageSchema]

})

const UserModel = (mongoose.models.user as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel;

