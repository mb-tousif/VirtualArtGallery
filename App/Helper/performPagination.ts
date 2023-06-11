import { SortOrder } from "mongoose";

type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
}

type IReturn = {
  page: number;
  limit: number;
  skip: number;
  sortBy?: string;
  sortOrder?: SortOrder;
}

export const performPagination = (options: IOptions): IReturn => {
  const { page = 1, limit = 2 } = options;
  const skip= (page - 1) * limit;
  const sortBy= options.sortBy || "createdAt"
  const sortOrder= options.sortOrder || "desc"
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder
  };
};
