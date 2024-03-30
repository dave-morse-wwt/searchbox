import { NetFetching, NetError, netError, netFetching } from "../types/webApiTypeSym";

export const SearchResults = <SuccessType,>({results} : {results: SuccessType | NetFetching | NetError}) => 
  <div>{results === netError ? "ERROR" : results === netFetching ? "..." : JSON.stringify(results)}</div>