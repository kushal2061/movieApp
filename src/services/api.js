const API_KEY = "050cb9dcb361bc321e2d3f3e5f8709cd";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const respond = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  const data = await respond.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const respond = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  const data = await respond.json();
  return data.results;
};