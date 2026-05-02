import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RepoCard from "../components/RepoCard";
import Loader from "../components/Loader";
import { searchRepos } from "../services/githubApi";
import { useDebounce } from "../hooks/useDebounce";
import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("react");
  const debounced = useDebounce(query);

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await searchRepos(debounced);
      setRepos(data.items || []);
      setLoading(false);
    };

    fetchData();
  }, [debounced]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">RepoFinder</h1>
        <Link to="/favorites">❤️ Favorites</Link>
      </div>

      <SearchBar query={query} setQuery={setQuery} />

      {loading && <Loader />}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default Home;