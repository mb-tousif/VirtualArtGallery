import { TArt } from "./art.interfaces";
import { Art } from "./art.model";

export const createArtService = async (data: TArt): Promise<TArt> => {
    const art = new Art(data);
    const result = await art.save();
    return result;
}