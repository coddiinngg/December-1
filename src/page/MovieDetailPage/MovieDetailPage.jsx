import React from "react";
import { useFindMovieByIdQuery } from "../../hooks/useFindMoviesById";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import CommonBanner from "../../common/CommonBanner/CommonBanner";
import "./MovieDetailPage.style.css";
import DetailCard from "./component/DetailCard/DetailCard";
import MovieReview from "./component/MovieReview/MovieReview";
import RecommendationMovie from "./component/RecommendationMovie/RecommendationMovie";
import Loading from "../../common/Loading/Loading";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFindMovieByIdQuery({ id });

  if (isLoading) {
    return <Loading/>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <CommonBanner data={data} />
      <DetailCard data={data}/>
      <MovieReview id={id}/>
      <RecommendationMovie/>
    </div>
  );
};

export default MovieDetailPage;
