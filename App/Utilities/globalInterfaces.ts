export interface IPagination {
    page?: number;
    limit?: number;
    sort?: string;
    order?: "asc" | "desc";
    // order?: "1" | "-1";
    search?: string;
}

export interface IQueryResponse<T> {
    meta: {
        page: number;
        limit: number;
        totalPages: number;
    },
    data: T;
}