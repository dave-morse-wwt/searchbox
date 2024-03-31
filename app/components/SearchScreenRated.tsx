import { skipToken } from "@reduxjs/toolkit/query";
import { useRatingQuery, useSearchQuery } from "../services/searchApi";
import { SearchBox } from "./SearchBox";
import { useState } from "react";
import { SearchResults, SearchResultsRated } from "./SearchResultsRated";

export const SearchScreenRatedBuggy = () => {
    const [query, setQuery] = useState("fox");
    const { data: searchResults } = useSearchQuery(query);
    const { data: stars } = useRatingQuery(searchResults?.map(p => p.id) ?? skipToken);

    return (<div>
                <h1>Search</h1>
                <SearchBox query={query} setQuery={setQuery} />
                <SearchResultsRated searchResults={searchResults} stars={stars} />
            </div>)
}
export const SearchScreenRated = () => {
    const [query, setQuery] = useState("fox");
    const { data: searchResults } = useSearchQuery(query);
    const { currentData: stars } = useRatingQuery(searchResults?.map(p => p.id) ?? skipToken);

    return (<div>
                <h1>Search</h1>
                <SearchBox query={query} setQuery={setQuery} />
                <SearchResultsRated searchResults={searchResults} stars={stars} />
            </div>)
}

export const SearchScreen = () => {
    const [query, setQuery] = useState("fox");
    const { data } = useSearchQuery(query);

    return (<div>
                <h1>Search</h1>
                <SearchBox query={query} setQuery={setQuery} />
                <SearchResults searchResults={data} />
            </div>)
}