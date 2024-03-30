import { Product, Ratings } from "../types/businessTypes";
import { NetFetching, NetError, netError, netFetching } from "../types/webApiTypeSym";

export const SearchResultsRated = ({results, ratings} : {results: Product[] | NetFetching | NetError, ratings: Ratings | NetFetching | NetError}) => {
    return (<ul>{results === netError || ratings === netError ? "ERROR" : 
                    results === netFetching || ratings === netFetching ? "..." : 
                    results.map(({id, name}) => <li key={id}>{name} {"⭐️".repeat(ratings[id])}</li>)
                    }
            </ul>);
}