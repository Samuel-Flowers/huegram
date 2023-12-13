import { SearchResult } from './SearchResult'



        export const SearchResultsList = ({ results }: { results: { color: string }[] }) => {
          return (
            <div className="left-0 top-full mt-1 absolute bg-[#1e293b] text-white p-3">
              {results.map((result, id) => {
                return <SearchResult result={result} key={id} />;
              })}
            </div>
          );
        };
