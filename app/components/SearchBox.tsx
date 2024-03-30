import { Dispatch, SetStateAction } from "react";



export const SearchBox = ({query, setQuery}: {query: string, setQuery: Dispatch<SetStateAction<string>>}) => {
    const handleInputChange = (event: { target: { value: string; }; }) => {
        setQuery(event.target.value);
      };
    return (<div>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Enter query..."
                />
            </div>
            )
}
