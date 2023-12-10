import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


interface Color {
  color: string;
}

export const SearchBar = ({ setResults }: { setResults: (results: Color[]) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (value: string) => {
    setSearchTerm(value);

    // Use the value parameter directly in the filter function
    fetchData(value);
  };

  const fetchData = (term: string) => {
    fetch("sampleData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        const results = json.filter((color: { color: string }) => {
          return color && color.color && color.color.toLowerCase().includes(term.toLowerCase());
        });
        setResults(results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setResults([]); // Set results to an empty array in case of an error
      });
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};
 
