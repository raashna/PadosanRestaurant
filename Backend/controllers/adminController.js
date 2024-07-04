// controllers/adminController.js

import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

// Login admin
const loginAdmin = async (req, res) => {
    const { email, password, secretKey } = req.body;
    try {
        if (email !== process.env.ADMIN_MAIL) {
            return res.json({ success: false, message: "Admin doesn't exist" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        if (admin.secretKey !== process.env.SECRET_KEY) {
            return res.json({ success: false, message: "Invalid secret key" });
        }

        const token = createToken(admin._id);
        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Register admin
const registerAdmin = async (req, res) => {
    const { name, email, password, secretKey } = req.body;
    try {
        const exists = await adminModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "Admin already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newAdmin = new adminModel({
            name,
            email,
            password: hashedPassword,
            secretKey
        });

        await newAdmin.save();
        res.json({ success: true, message: "Admin registered successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

export { loginAdmin, registerAdmin };
