import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (repo) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === repo.id);
      if (exists) return prev;
      return [...prev, repo];
    });
  };

  const removeFavorite = (repoId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== repoId));
  };

  const isFavorite = (repoId) => {
    return favorites.some((fav) => fav.id === repoId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};