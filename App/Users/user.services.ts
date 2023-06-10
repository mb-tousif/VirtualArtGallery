import { TUser } from "./user.interfaces";
import { User } from "./user.model";
import { performPagination } from "../Helper/performPagination";
import { IPagination, IQueryResponse } from '../Utilities/globalInterfaces';
export const createUserService = async (userInfo: TUser) => {
  const result = await User.create(userInfo);
  return result;
};

export const getAllUsersService = async (paginationOptions: IPagination): Promise<IQueryResponse <TUser[]>> => {
  // const result = await User.find().lean();
  const { page, limit, skip } = performPagination(paginationOptions);
  const result = await User.find().skip(skip).limit(limit).lean();
  return {
    meta: {
      page,
      limit,
      totalPages: Math.ceil((await User.countDocuments().lean())/limit)
    },
    data: result
  }
}

export const getUserByUserIdService = async (id: string) => {
  const result = await User.findById({_id:id})
  return result;
}