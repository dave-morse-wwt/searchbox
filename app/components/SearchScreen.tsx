import { useGetPokemonByNameQuery } from "../services/searchApi";
import { SearchBox } from "./SearchBox";
import { SearchResults } from "./SearchResults";

export const SearchScreen = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
    console.log({data, error, isLoading});
    return (<div>
                <h1>Search</h1>
                <SearchBox />
                <SearchResults results={data}/>
            </div>
            )
}