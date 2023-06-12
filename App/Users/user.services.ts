import { TSearchedUser, TUser } from "./user.interfaces";
import { User } from "./user.model";
import { performPagination } from "../Helper/performPagination";
import { IPagination, IQueryResponse } from '../Utilities/globalInterfaces';
import { SortOrder } from "mongoose";
import { userSearchFields } from "../Constants/pagination";

export const createUserService = async (userInfo: TUser) => {
  const result = await User.create(userInfo);
  return result;
};

export const getAllUsersService = async (paginationOptions: IPagination, searchQuery: TSearchedUser): Promise<IQueryResponse <TUser[]>> => {
  // const result = await User.find().lean();
  const { page, limit, skip, sortBy, sortOrder } = performPagination( paginationOptions );
  const { search, ...filterData } = searchQuery;
  const searchFields = userSearchFields;
  const andConditions = [];
  if (search) {
    andConditions.push({
      $or: searchFields.map(field => ({
        [field]: {
          $regex: search,
          $options: 'i',
        },
      })),
    });
  }
  // const andConditions = [
  //   {
  //     $or: [
  //       {
  //         role: {
  //           $regex: search,
  //           $options: "i",
  //         }
  //       }
  //     ]
  //   }
  // ];

  if (Object.keys(filterData).length) {
    andConditions.push({
      $and: Object.entries(filterData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortedCondition: { [key: string ]: SortOrder} = {}
  if( sortBy && sortOrder ) {
    sortedCondition[sortBy] = sortOrder
  }
  
  const noQuery = andConditions.length > 0 ? { $and: andConditions}: {};

  const result = await User.find(noQuery).sort(sortedCondition).skip(skip).limit(limit).lean();
  
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

// update userById
export const updateUserService = async (id: string, data:Partial<TUser>) => {
  const result = await User.findByIdAndUpdate({_id:id}, data, {new: true})
  return result;
}
