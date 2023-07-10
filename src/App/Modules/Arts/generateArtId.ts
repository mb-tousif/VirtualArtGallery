import { Art } from "../Arts/art.model";

const getLastArtId = async () => {
    const lastArtId = await Art.findOne({}, { artId: 1, _id: 0 }).sort({ createdAt: -1, });
    return lastArtId?.artId ? lastArtId?.artId.substring(4) : null;
};

const generateArtId = async ()=> {
    const lastArtId: string = (await getLastArtId())|| (0).toString().padStart(5, '0');
    const userId = "Art-"+ (parseInt(lastArtId) + 1).toString().padStart(5, '0');
    return userId;
}

export default generateArtId;