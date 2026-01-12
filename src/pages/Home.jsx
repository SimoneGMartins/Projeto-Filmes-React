import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./MoviesGrid.css";

const MoviesURL = import.meta.env.VITE_API;
const APIKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
    setTopMovies(data.results || []);
  };

  useEffect(() => {
    console.log("useEffect rodou");

    const topRatedUrl = `${MoviesURL}top_rated?api_key=${APIKey}&language=pt-BR&page=1`;
    console.log(topRatedUrl);

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>

      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
