import { Schema, model } from "mongoose";
import { TArtist } from "./artist.interfaces";

const artistSchema = new Schema <TArtist>({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["artist", "seniorArtist", "adminArtist"],
        default: "artist",
    },
    DOB: {
        type: Date || String,
        trim: true,
    },
    ECN: {
        type: String,
        trim: true,
    },
    reference: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    contactNo: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
    department: {
        type: String,
        trim: true,
    },
    artSold: [
        {
            artId: String,
            artName: String,
            artPrice: Number,
            artQuantity: Number,
            artSoldDate: Date,
            totalAmount: Number,
        }
    ],
},
{
    timestamps: true,
});

export const Artist = model<TArtist>("artist", artistSchema);