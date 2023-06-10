type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  // order?: "1" | "-1";
}

type IReturn = {
  page: number;
  limit: number;
  skip: number;
//   sortBy?: string;
//   sortOrder?: 'asc' | 'desc';
}

export const performPagination = (options: IOptions): IReturn => {
  const { page = 1, limit = 2 } = options;
  return {
    page,
    limit,
    skip: (page - 1) * limit,
    // sortBy: options.sortBy,
  };
};
