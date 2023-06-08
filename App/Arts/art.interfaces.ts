export type TArt = {
    artId: string;
    artName: string;
    artDescription: string;
    artAuthor: string;
    artAward?: string;
    artPrice: number;
    artQuantity: number;
    artDrawingDate: string;
    artSelling?: [
        {
            userId: string;
            userEmail: string;
            transactionId: string;
            purchaseDate: string;
            amount: number;
        }
    ];
    artStatus: string;
    artImageUrl?: string;
};

export type TArtAward = "Venice Biennale" | "Art Basel" | "Whitney Biennial" | "Art Dubai" | "Dhaka Art Summit" | "Bengal Art Week" | "Young Artists Art Exhibition";