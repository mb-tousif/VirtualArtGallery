import { Schema, model } from "mongoose";
import { TUser } from "./user.interfaces";

const userSchema = new Schema<TUser>(
  {
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
      enum: ["user", "activeUser", "artist", "admin", "superAdmin"],
      default: "user",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
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
    contactNo: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    purchasedArt: [String],
    favoritesArt: [String],
  },
  {
    timestamps: true,
  }
);

// userSchema.statics.generateUserId = function (): string {
//   let idEndpoint = 0;
//   return `User2023.0${idEndpoint++}`;
// };

export const User = model<TUser>("user", userSchema);