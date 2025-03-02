import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String, 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileUrl: String, 
    about: String,
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
