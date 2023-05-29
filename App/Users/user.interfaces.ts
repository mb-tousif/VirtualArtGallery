import { Model } from "mongoose";

export type TUser = {
    userId: string;
    email: string;
    password: string;
    role: string;
};

export interface IUserMethods {
    generateDefaultPassword: () => string;
    generateUserId: () => string;
}

export type UserModel = Model<TUser, {}, IUserMethods>;