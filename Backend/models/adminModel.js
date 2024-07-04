// models/adminModel.js

import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    secretKey: { type: String, required: true }
});

const adminModel = mongoose.model("Admin", adminSchema);
export default adminModel;
