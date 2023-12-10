import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch as faSearch } from '@fortawesome/free-solid-svg-icons';



export const SearchBar = ({setResults}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (value) => {
      setSearchTerm(value);
    
      // Use the value parameter directly in the filter function
      fetchData(value);
    };
    
    const fetchData = (term) => {
      fetch("sampleData.json")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((color) => {
            return color && color.color && color.color.toLowerCase().includes(term.toLowerCase());
          });
          setResults(results);
        });
    };
    return ( 
        <div className="input-wrapper">
            <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => handleChange(e.target.value)}/>
            <FontAwesomeIcon icon={faSearch}/>
        </div>
     );
}
 
