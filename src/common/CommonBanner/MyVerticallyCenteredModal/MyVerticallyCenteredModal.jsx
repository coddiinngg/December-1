import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import YouTube from "react-youtube"; // YouTube 컴포넌트 임포트
import { useMovieVideoQuery } from "../../../hooks/useMovieVideo";
import { useParams } from "react-router-dom";
import { usePopularMoviesQuery } from "../../../hooks/usePopularMovies";
import "./MyVerticallyCenteredModal.style.css"

const MyVerticallyCenteredModal = (props) => {
  const { id } = useParams();
  const { data: popularMovie } = usePopularMoviesQuery();
  const movieId = popularMovie?.results[0]?.id;
  const { data, isLoading, isError, error } = useMovieVideoQuery({
    id: id || movieId,
  });
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h4>{error.message}</h4>;
  }

  const movieKey = data?.results[0]?.key;

  // YouTube 비디오 플레이어 옵션
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1, // 자동 재생
    },
  };

  // 비디오 준비 완료 후 실행될 메서드
  const _onReady = (event) => {
    event.target.pauseVideo(); // 비디오가 준비되면 자동으로 일시 정지
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Footer>
            <Button className="btn-danger" onClick={props.onHide}>X</Button>
          </Modal.Footer>

          <Modal.Body>
          {movieKey && (
            <YouTube
              className="video"
              videoId={movieKey} // 비디오 ID
              opts={opts} // 비디오 옵션
              onReady={_onReady} // 준비 완료 후 호출될 메서드
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyVerticallyCenteredModal;
