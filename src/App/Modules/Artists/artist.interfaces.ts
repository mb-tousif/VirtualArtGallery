
export type TArtist = {
    email: string;
    password: string;
    artistId: string;
    role: string;
    name?: string
    gender?: string;
    DOB?: string | Date;
    ECN?: string;
    reference?: string;
    contactNo?: string;
    address?: string;
    department?: string;
    award: string;
    artSold?: [
        {
            artId: string;
            artName: string;
            artPrice: number;
            artQuantity: number;
            artSoldDate: Date;
            totalAmount: number;
        }
    ];
};