import { Id, Product } from "../types/businessTypes";

export const SearchResultsRated = ({searchResults, stars} : 
                                   {searchResults: Product[] | undefined,
                                    stars: Record<Id,number> | undefined
                                   }) => {
    return (<ul>{searchResults && stars
                 ? searchResults.map(({id, name}) => {
                     const rating = stars[id];
                     if (!rating)
                       throw new Error(`Could not find some of ${JSON.stringify(searchResults)} in ${JSON.stringify(stars)}`);
                     return <li key={id}>{name} {"⭐️".repeat(rating)}</li>
                   })
                 : "..."
                }
            </ul>);
}

export const SearchResults = ({searchResults} : {searchResults: Product[] | undefined}) => 
  (<ul>{searchResults 
        ? searchResults.map(({id, name}) => <li key={id}>{name}</li>) 
        : [1,2,3,4].map(n => <li key={n}>...</li>)}
   </ul>)