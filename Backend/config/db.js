import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arpan:kavita09@cluster0.vie8tqo.mongodb.net/PadosanRestaurant').then(()=>console.log("DB Connected"));
}