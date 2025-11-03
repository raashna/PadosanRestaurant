import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema({
    url: { type: String, required: true },
    destination: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
});

const uploadModel = mongoose.models.upload || mongoose.model("upload",uploadSchema);
export default uploadModel;