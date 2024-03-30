import { skipToken } from "@reduxjs/toolkit/query";
import { useRatingQuery, useSearchQuery } from "../services/searchApi";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";
import { useState } from "react";
import { netDecode } from "../types/webApiTypeSym";
import { TypedUseQueryHookResult } from "@reduxjs/toolkit/query/react";
import { SearchResultsRated } from "./SearchResultsRated";

export const SearchScreenRated = () => {
    const [query, setQuery] = useState("fox");
    const searchUQR = useSearchQuery(query);
    const ratingUQR = useRatingQuery(searchUQR.currentData ?? skipToken);


    return (<div>
                <h1>Search</h1>
                <SearchBox query={query} setQuery={setQuery} />
                <SearchResultsRated results={netDecode(ratingUQR)} />
            </div>
            )
}