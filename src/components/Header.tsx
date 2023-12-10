import {SearchBar} from './SearchBar';
import {useState} from "react";
import { SearchResultsList } from './SearchResultsList';

interface Color {
    color: string; // Add the required 'color' property
}

const Header = () => {
        const [results, setResults] = useState<Color[]>([]) // Specify the type for the results state variable
        return ( 
                <header className="w-full flex bg-white bg-gradient-to-r from-[#22c1c3] to-[#fdbb2d]">
                        <h1>Task Tracker</h1>
            <SearchBar setResults={setResults}/>
            <SearchResultsList results={results}/>
        </header>
     );
}
 
export default Header;