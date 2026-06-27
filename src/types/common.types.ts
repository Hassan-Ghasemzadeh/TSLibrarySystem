export type ID = string | number;
export type Timestamp = Date;
export type Status = "pending" | "active" | "inActive" | "deleted";

export type BookId = string & { __brand: "BookId" }
export type UserId = string & { __brand: "UserId" }
export type TransactionId = string & { __brand: "TransactionId" }