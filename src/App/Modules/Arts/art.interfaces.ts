import { Types } from "mongoose";
import { TUser } from "../Users/user.interfaces";

export type TArt = {
    artId: string;
    artName: string;
    artDescription?: string;
    artAuthor: string;
    artAward: TArtAward[];
    artPrice: number;
    artQuantity: number;
    artSelling?: [
        {
            userId: Types.ObjectId | TUser;
            transactionId: string;
            purchaseDate: string;
            amount: number;
        }
    ];
    artStatus: string;
    artImageUrl: string;
};

export type TArtAward = "Venice Biennale" | "Art Basel" | "Whitney Biennial" | "Art Dubai" | "Dhaka Art Summit" | "Bengal Art Week" | "Young Artists Art Exhibition" |"Artistic Achievement Award";