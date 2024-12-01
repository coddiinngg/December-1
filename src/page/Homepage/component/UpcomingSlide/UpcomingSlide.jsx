import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Alert from "react-bootstrap/Alert";
import { useUpcomingMovies } from '../../../../hooks/useUpcomingMovies';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';
import Loading from '../../../../common/Loading/Loading';

const UpcomingSlide = () => {
    const { data, isLoading, isError, error } = useUpcomingMovies()
    if (isLoading) {
        return <Loading/>;
      }
      if (isError) {
        return <Alert variant="danger">{error.message}</Alert>;
      }
      return (
        <div>
          <MovieSlider title="Upcoming Movies" movies={data.results} responsive={responsive}/>
        </div>
  )
}

export default UpcomingSlide