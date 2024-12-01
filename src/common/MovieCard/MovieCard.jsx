import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  const moveToDetail = (movie) => {
    navigate(`/movies/${movie.id}`);
  };

  const showGenre = (genreIdList) => {
    if (!genreData || !genreIdList) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj ? genreObj.name : "Unknown";
    });
    return genreNameList;
  };

  return (
    <div
      onClick={() => moveToDetail(movie)}
      className="movie-card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w300_and_h450_face${movie.poster_path}` +
          ")",
      }}
    >
      <div className="over-text">
        <h2>{movie.title}</h2>
        <p>
          {showGenre(movie?.genre_ids).map((genre) => (
            <Badge bg="danger">{genre}</Badge>
          ))}
        </p>
        <div className="center">
          {movie.adult ? (
            <Badge bg="danger">+19</Badge>
          ) : (
            <Badge bg="success">All</Badge>
          )}
          <img
            className="vote"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
          />
          {movie.vote_average}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
