import React from "react";
import "react-multi-carousel/lib/styles.css";
import { useTopRatedMovies } from "../../../../hooks/useTopRatedMovies";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import Loading from "../../../../common/Loading/Loading";

const TopRatedSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMovies();
  if (isLoading) {
    return <Loading/>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
        <MovieSlider title="TopRated Movies" movies={data.results} responsive={responsive}/>
    </div>
  );
};

export default TopRatedSlide;
