import { User } from "./user.model";

const getLastUserId = async () => {
    const lastUserId = await User.findOne({}, { userId: 1, _id: 0 }).sort({ createdAt: -1, }).lean();
    return lastUserId?.userId ? lastUserId?.userId.substring(5) : null;
};

const generateUserId = async ()=> {
    const lastUserId: string = (await getLastUserId())|| (0).toString().padStart(5, '0');
    const userId ="user-" + (parseInt(lastUserId) + 1).toString().padStart(5, '0');
    return userId;
}

export default generateUserId;