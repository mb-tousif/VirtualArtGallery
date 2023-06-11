import { TUser } from "./user.interfaces";
import { User } from "./user.model";
import { performPagination } from "../Helper/performPagination";
import { IPagination, IQueryResponse } from '../Utilities/globalInterfaces';
import { SortOrder } from "mongoose";
export const createUserService = async (userInfo: TUser) => {
  const result = await User.create(userInfo);
  return result;
};

export const getAllUsersService = async (paginationOptions: IPagination): Promise<IQueryResponse <TUser[]>> => {
  // const result = await User.find().lean();
  const { page, limit, skip, sortBy, sortOrder } = performPagination(paginationOptions);
  const sortedCondition: { [key: string ]: SortOrder} = {}
  if( sortBy && sortOrder ) {
    sortedCondition[sortBy] = sortOrder
  }
  const result = await User.find().sort(sortedCondition).skip(skip).limit(limit).lean();
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