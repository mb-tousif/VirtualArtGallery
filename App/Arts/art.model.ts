import { Schema, model } from "mongoose";
import { TArt } from "./art.interfaces";
import { artAwardNames } from "./art.constants";

const artSchema = new Schema<TArt>({
    artId: {
        type: String,
        required: true,
        unique: true,
    },
    artName: {
        type: String,
        required: true,
        trim: true,
    },
    artDescription: {
        type: String,
        required: true,
        trim: true,
    },
    artAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    artAward: {
        type: String,
        enum: artAwardNames,
        default: "Young Artists Art Exhibition",
    },
    artPrice: {
        type: Number,
        required: true,
    },
    artQuantity: {
        type: Number,
        required: true,
    },
    artDrawingDate: {
        type: String,
        required: true,
    },
    artSelling: [
        {
            userId: String,
            userEmail: String,
            transactionId: String,
            purchaseDate: String,
            amount: Number,
        }
    ],
    artStatus: {
        type: String,
        enum: ["Available", "Sold"],
        default: "Available",
    },
    artImageUrl: {
        type: String,
        required: true,
    },
},
{
    timestamps: true,
});

export const Art = model<TArt>("art", artSchema);