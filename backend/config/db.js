import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sivaramp842:Sivaram1234@cluster0.ehc78.mongodb.net/food-delivery').then(() => console.log("DB Connected"));
}
