export const searchRepos = async (query) => {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${query}&per_page=10`
  );

  if (!res.ok) throw new Error("API Error");

  return res.json();
};