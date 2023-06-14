import { TArt } from "./art.interfaces";
import { Art } from "./art.model";

export const createArtService = async (data: TArt): Promise<TArt> => {
    const art = new Art(data);
    const result = await art.save();
    return result;
}

export const updateArtByIdService = async (id: string, data: Partial<TArt>) => {
    const result = await Art.findByIdAndUpdate({_id:id}, data, {new: true})
    return result;
}

export const getAllArtService = async () => {
    const result = await Art.find();
    return result;
}