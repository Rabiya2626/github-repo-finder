import { Search } from "lucide-react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-3 text-gray-400" size={18} />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search repositories..."
        className="w-full pl-10 pr-4 py-3 rounded-xl border bg-white"
      />
    </div>
  );
};

export default SearchBar;