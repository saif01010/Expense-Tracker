import { Transection } from "../models/transection.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
const transectionResolver ={
    Mutation:{
        addTransection: asyncHandler(async(_,{input},context)=>{
            const {amount,paymentType,description,category,date} = input;
            if(!amount || !paymentType || !description || !category || !date){
                throw new Error("All fields are required");
            };
            const isUser = await context.getUser();
            if(!isUser){
                throw new Error("User not found");
            };
            const userid = user._id;
            const user = isUser.name;
            const transection = await Transection.create({
                amount,
                paymentType,
                description,
                category,
                userId: userid,
                user,
                date
            });

            return transection;

        }),
        updateTransection: asyncHandler(async(_,{_id,input},context)=>{
            const {amount,paymentType,description,category,date} = input;
            const isUser = await context.getUser();
            if(!isUser){
                throw new Error("User not found");
            };
            const transection = await Transection.findOneAndUpdate({_id},{
                amount,
                paymentType,
                description,
                category,
                date
            },{new:true});
            return transection;
        }),
        deleteTransection: asyncHandler(async(_,{_id},context)=>{
            const isUser = await context.getUser();
            if(!isUser){
                throw new Error("User not found");
            };
           const transection =  await Transection.findOneAndDelete({_id});
            return transection;
        })
    },
    Transection:{
        user:asyncHandler(async(parent)=>{
            const user = await User.findById(parent.userId);
            if(!user){
                throw new Error("User not found");
            }
            return user;
        })
    },
    Query:{
        getAllTransections:asyncHandler(async(_,args,context)=>{
            const isUser = await context.getUser();
            if(!isUser){
                throw new Error("User not found");
            };
            const transections = await Transection.find({userId:isUser._id});
            return transections;
        }),
        transectionById:asyncHandler(async(_,{_id},context)=>{
            const isUser = await context.getUser();
            if(!isUser){
                throw new Error("User not found");
            };
            const transection = await Transection.findOne({_id,userId:isUser._id});
            if(!transection){
                throw new Error("Transection not found");
            };
            return transection;
        })
    }
}
export { transectionResolver };