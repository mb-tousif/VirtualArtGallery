import mongoose, { Schema, model } from "mongoose";
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
        unique: true,
    },
    artDescription: {
        type: String,
        trim: true,
    },
    artAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    artAward:{
        type: [
          {
            type: String,
            enum: artAwardNames,
            default: "Young Artists Art Exhibition",
          },
        ],
        validate: {
          validator: function (value: string[]) {
            const uniqueSet = new Set(value);
            return uniqueSet.size === value.length;
          },
          message: "Duplicate art awards are not allowed.",
        },
      },
    artPrice: {
        type: Number,
        required: true,
    },
    artQuantity: {
        type: Number,
        required: true,
    },
    artSelling: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            },
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

artSchema.pre<TArt>("save", function (next) {
    const uniqueSet = [...new Set(this.artAward)];
    this.artAward = uniqueSet;
    next();
  });

export const Art = model<TArt>("art", artSchema);