import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import RepoCard from "../components/RepoCard";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="p-6">
      <Link to="/">← Back</Link>

      <h1 className="text-xl font-bold mt-4">Favorites</h1>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {favorites.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;