type NetStatus<SuccessType> = NetStatusFetching | NetStatusError | NetStatusLoaded<SuccessType>;

type NetStatusFetching = { net: "fetching" }
type NetStatusError = { net: "error", msg: string };
type NetStatusLoaded<SuccessType> = { net: "loaded", payload: SuccessType };



// function netDecode<T>(x: TypedUseQueryHookResult<T, any, any>): string {
//     if (x===loading) return "loading";
//     else if (errorMessage in x) return x[errorMessage];
//     else return "loaded";
// }