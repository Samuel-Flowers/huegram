import {SearchBar} from './SearchBar';
import {useState} from "react";
import { SearchResultsList } from './SearchResultsList';


interface Color {
    color: string; // Add the required 'color' property
}

const Header = () => {
        const [results, setResults] = useState<Color[]>([]) // Specify the type for the results state variable
        return ( 

            <div className="w-full border-b  relative flex bg-gradient-to-r from-[#494075] to-[#08b38b] justify-between px-32 items-center h-16">
                <h1 className='text-white bold text-4xl'>Huegram</h1>
                <SearchBar setResults={setResults}/>
                <SearchResultsList results={results}/>
            </div>

     );
}
 
export default Header;