import { Schema, model } from "mongoose";
import { TUser } from "./user.interfaces";
import bcrypt from "bcrypt";
import Config from "../../../Config";
import mongoose from "mongoose";

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
      type: String || Date,
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

userSchema.pre<TUser>("save", async function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password, Number(Config.saltRounds));
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (password: string | Buffer, hash: string) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

export const User = model<TUser>("user", userSchema);