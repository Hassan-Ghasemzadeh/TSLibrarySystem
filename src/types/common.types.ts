export type ID = string | number;
export type Timestamp = Date;
export type Status = "pending" | "active" | "inActive" | "deleted";

export type BookId = string & { __brand: "BookId" };
export type UserId = string & { __brand: "UserId" };
export type TransactionId = string & { __brand: "TransactionId" };

export function createBrandedId<T extends string>(id: string): T {
    return id as T;
};

export type ApiResponse<T> = {
    success: boolean,
    data?: T,
    error?: string,
    timestamp: Timestamp,
};

export type PaginatedResult<T> = {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
};

export type FilterOptions<T> = {
    [K in keyof T]?: T[K] | T[K][] | { min?: T[K], max?: T[K] };
};
 
export type SortOptions<T> = {
    field: keyof T;
    order: "asc" | "desc";
};