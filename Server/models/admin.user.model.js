import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // adminid:{
    //     type:Number,
    //     required: true,
    // },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: String,
        default: "Admin",
    },

}, { timestamps: true });


export default mongoose.model("admin-user", userSchema);