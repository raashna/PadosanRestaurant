import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://niyazhaque098:6jTN4oi8EGTrWkF7@cluster0.rdnafwg.mongodb.net/').then(()=>console.log("DB Connected"));
}