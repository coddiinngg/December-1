import React from "react";
import { useMovieRecommendations } from "../../../../hooks/useMovieRecommendations";
import { useParams } from "react-router-dom";
import MovieCard from "../../../../common/MovieCard/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import "./RecommendationMovie.style.css";

const RecommendationMovie = () => {
  const { id } = useParams();
  const { data } = useMovieRecommendations({ id });
  return (
    <Container>
      <h2 className="title">Recommendation Movies</h2>
      <Row>
        {data?.results.map((movie) => (
          <Col lg={3} xs={6}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecommendationMovie;
