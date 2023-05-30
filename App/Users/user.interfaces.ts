import { Model } from "mongoose";

export type TUser = {
    email: string;
    password: string;
    userId: string;
    name?: string
    role: string;
    gender?: string;
    DOB?: string | Date;
    ECN?: string;
    reference?: string;
    contactNo?: string;
    address?: string;
    purchasedArt?: string[];
    favoritesArt?: string[];
};
// export interface IUserMethods {
//     generateDefaultPassword: () => string;
//     generateUserId: () => string;
// }

// export type UserModel = Model<TUser, {}, IUserMethods>;