import { TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react";

export const netFetching: unique symbol = Symbol('netFetching');
export const netError: unique symbol = Symbol('netError');
export type NetFetching = typeof netFetching;
export type NetError = typeof netError;

export function netDecode<T>(uqr: TypedUseQueryHookResult<T, any, any>): T | NetFetching | NetError {
    const { isError, isFetching, isUninitialized, currentData } = uqr
    if (isError) return netError;
    else if (isFetching || isUninitialized) return netFetching;
    else if (currentData === undefined) throw new Error("In theory this can not happen.")
    else return currentData;
}