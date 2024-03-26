import mongoose ,{Schema} from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilePic:{
        type: String,
        default:" "
    },
    gender:{
        type: String,
        enum:["Male","Female","Other"],
        required: true
    }
}, {timestamps: true});


export const User = mongoose.model('User', userSchema);