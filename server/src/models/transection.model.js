import mongoose,{Schema} from "mongoose";

const transectionSchema = new Schema({
    amount:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        enum: ["saving", "expense", "investment"],
        required: true
    },
    paymentType:{
        type: String,
        enum:["cash", "card"],
        required: true
    },
    description:{
        type: String,
        default:""
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    data:{
        type: Date,
        required: true
    }
}, {timestamps: true});


export const Transection = mongoose.model('Transection', transectionSchema);