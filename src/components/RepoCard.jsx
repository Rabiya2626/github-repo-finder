import { Star, GitFork, Heart } from "lucide-react";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const RepoCard = ({ repo }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);
  const favorited = isFavorite(repo.id);

  const handleToggleFavorite = () => {
    if (favorited) {
      removeFavorite(repo.id);
    } else {
      addFavorite(repo);
    }
  };

  return (
    <div className="p-5 rounded-xl bg-white shadow hover:shadow-lg">
      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="block hover:underline"
      >
        <h2 className="font-semibold">{repo.name}</h2>
        <p className="text-sm text-gray-500 mt-2">{repo.description}</p>

        <div className="flex justify-between mt-3 text-sm">
          <span><Star size={14} /> {repo.stargazers_count}</span>
          <span><GitFork size={14} /> {repo.forks_count}</span>
        </div>
      </a>

      <button
        onClick={handleToggleFavorite}
        className={`mt-3 flex items-center gap-1 ${
          favorited ? "text-red-500" : "text-gray-400"
        }`}
      >
        <Heart size={16} fill={favorited ? "currentColor" : "none"} />
        {favorited ? "Favorited" : "Favorite"}
      </button>
    </div>
  );
};

export default RepoCard;