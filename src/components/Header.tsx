import {SearchBar} from './SearchBar';
import {useState} from "react";
import { SearchResultsList } from './SearchResultsList';
import './Header.css' 

interface Color {
    color: string; // Add the required 'color' property
}

const Header = () => {
        const [results, setResults] = useState<Color[]>([]) // Specify the type for the results state variable
        return ( 

            <div className="w-full search-container flex bg-white bg-gradient-to-r from-[#22c1c3] to-[#fdbb2d] justify-around items-center h-16">
                <h1>Huegram</h1>
                <SearchBar setResults={setResults}/>
                <SearchResultsList results={results}/>
            </div>

     );
}
 
export default Header;