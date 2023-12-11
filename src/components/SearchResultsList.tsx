import { SearchResult } from './SearchResult'
import './Header.css' 


        export const SearchResultsList = ({ results }: { results: { color: string }[] }) => {
          return (
            <div className="dropdown-menu absolute left-0 top-full mt-1">
              {results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
              })}
            </div>
          );
        };
