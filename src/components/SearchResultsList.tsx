import React from 'react'
import { SearchResult } from './SearchResult'



        export const SearchResultsList = ({ results }: { results: { color: string }[] }) => {
          return (
            <div>
              {results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
              })}
            </div>
          );
        };
