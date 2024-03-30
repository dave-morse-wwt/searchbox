import { skipToken } from "@reduxjs/toolkit/query";
import { useRatingQuery, useSearchQuery } from "../services/searchApi";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { useState } from "react";
import { netDecode } from "../types/webApiTypeSym";
import { TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react";

export const SearchScreen = () => {
    const [query, setQuery] = useState("fox");
    const uqr: TypedUseQueryHookResult<string[], any, any> = useSearchQuery(query);

    return (<div>
                <h1>Search</h1>
                <SearchBox query={query} setQuery={setQuery} />
                <SearchResults results={netDecode(uqr)} />
            </div>
            )
    // const { data, currentData, isLoading, isFetching, isError, error} = useSearchQuery(query);

    // console.log({data, currentData, isLoading, isFetching, isError, error});
    // return (<div>
    //             <h1>Search</h1>
    //             <SearchBox query={query} setQuery={setQuery} />
    //             <SearchResults results={isError? [{name: JSON.stringify(error), rating: -1}] : data ? [{name: data[0], rating: 0}] : undefined}/>
    //         </div>
    //         )
    // const { data: wfData, currentData: wfCurrentData, isLoading: wfIsLoading, isFetching: wfIsFetching} = useRatingQuery(data ? data[0] : skipToken)
    /*
    console.log({data, currentData, isLoading, isFetching}, {wfData, wfCurrentData, wfIsLoading, wfIsFetching});
    return (<div>
                <h1>Search</h1>
                <SearchBox query={query} setQuery={setQuery} />
                <SearchResults results={wfData && data ? [{name: data[0], rating: wfData.rating}] : undefined}/>
            </div>
            )
            */
}