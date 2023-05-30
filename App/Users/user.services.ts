import { TUser } from "./user.interfaces";
import { User } from "./user.model";

export const createUserService = async (userInfo: TUser) => {
  const result = await User.create(userInfo);
  return result;
};
