import { QueryStatus, TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react";

type NetStatus<SuccessType> = NetStatusFetching | NetStatusError | NetStatusLoaded<SuccessType>;

type NetStatusFetching = { status: "fetching" };
type NetStatusError = { status: "error", msg: string };
type NetStatusLoaded<SuccessType> = { status: "loaded", payload: SuccessType };

export function netStatus<T>(uqr: TypedUseQueryHookResult<T, any, any>): NetStatus<T> {
    const { currentData, error, isError } = uqr;
    if (currentData) return { status: "loaded", payload: currentData };
    if (isError) return { status: "error", msg: error };
    return { status: "fetching" }
}