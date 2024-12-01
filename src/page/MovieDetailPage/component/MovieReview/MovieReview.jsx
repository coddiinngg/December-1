import React, { useState, useEffect } from "react";
import "./MovieReview.style.css";
import { useMovieReviewsQuery } from "../../../../hooks/useMovieReviews";
import { Container } from "react-bootstrap";

const MovieReview = ({ id }) => {
  const { data } = useMovieReviewsQuery({ id });

  // 데이터가 로딩될 때 clickState를 초기화할 수 있도록 useEffect 사용
  const [clickState, setClickState] = useState([]);

  useEffect(() => {
    if (data?.results) {
      setClickState(data.results.map(() => false)); // 데이터가 있으면 상태 배열 초기화
    }
  }, [data]); // data가 변경될 때마다 상태를 초기화

  const reviewSee = (index) => {
    setClickState((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state)) // 해당 인덱스만 상태 변경
    );
  };

  return (
    <Container>
      <h2 className="review-title">Reviews({data?.results.length})</h2>
      {data?.results?.map((review, index) => (
        <div className="review" key={index}>
          <h4>{review?.author}</h4>
          <div className={clickState[index] ? "review-content" : "review-content-hidden"}>
            {review?.content}
          </div>
          <div className="review-button" onClick={() => reviewSee(index)}>
            {clickState[index] ? "접기" : "더보기"}
          </div>
        </div>
      ))}
    </Container>
  );
};

export default MovieReview;
