import { Schema, model } from "mongoose";
import { TUser } from "./user.interfaces";

const userSchema = new Schema<TUser>({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin", "superAdmin", "artist"],
        default: "user",
    },
},
{
    timestamps: true,
});

export const User = model<TUser>("user", userSchema);