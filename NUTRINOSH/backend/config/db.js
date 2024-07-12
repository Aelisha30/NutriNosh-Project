import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://aelishachoursiya01:30102001@cluster0.b5rtyf8.mongodb.net/NUTRINOSH').then(()=>console.log("DB Connected"))
}