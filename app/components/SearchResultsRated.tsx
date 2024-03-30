import { NetFetching, NetError, netError, netFetching } from "../types/webApiTypeSym";

export const SearchResultsRated = ({results} : {results: Record<string,number> | NetFetching | NetError}) => 
  (<ul>{results === netError ? "ERROR" : 
        results === netFetching ? "..." : 
        // JSON.stringify(Object.entries(results).map(entry => entry))
        Object.entries(results).map(([name, stars]) => <li key={name}>{name} {"⭐️".repeat(stars)}</li>)
        // <li>foo</li>
        }
   </ul>)