import { Id, Product } from "../types/businessTypes";

export const SearchResultsRated = ({searchResults, stars} : 
                                   {searchResults: Product[] | undefined,
                                    stars: Record<Id,number> | undefined
                                   }) => {
    return (<ul>{searchResults && stars
                 ? searchResults.map(({id, name}) => {
                     const starCount = stars[id];
                     if (starCount === undefined)
                       throw new Error(`Could not find ${id} in ${JSON.stringify(stars)}`);
                     return <li key={id}>{name} {"⭐️".repeat(starCount)}</li>
                   })
                 : [1,2,3,4].map(n => <li key={n}>...</li>)
                }
            </ul>);
}

export const SearchResults = ({searchResults} : {searchResults: Product[] | undefined}) => 
  (<ul>{searchResults 
        ? searchResults.map(({id, name}) => <li key={id}>{name}</li>) 
        : [1,2,3,4].map(n => <li key={n}>...</li>)}
   </ul>)