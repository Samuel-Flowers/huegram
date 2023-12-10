import {SearchBar} from './SearchBar';
import {React, useState} from "react";
import { SearchResultsList } from './SearchResultsList';


const Header = () => {
    const [results, setResults] = useState([])
    return ( 
        <header className="w-full flex bg-white bg-gradient-to-r from-[#22c1c3] to-[#fdbb2d]">
            <h1>Task Tracker</h1>
            <SearchBar setResults={setResults}/>
            <SearchResultsList results={results}/>
        </header>
     );
}
 
export default Header;