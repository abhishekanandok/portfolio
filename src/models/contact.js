import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            min: 5,
            max: 50,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);



export const Contact = mongoose.models?.Contact || mongoose.model("Contact", contactSchema);