import React from "react";
import "./CommonBanner.style.css";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal/MyVerticallyCenteredModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CommonBanner = ({ data, movieId }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="banner-frame">
      <div
        className="Banner"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.poster_path}` +
            ")",
        }}
      >
        <div className="text">
          <div className="banner-title">
            <h1>{data.title} </h1>
            <Button variant="danger" onClick={() => setModalShow(true)}>
              <FontAwesomeIcon icon={faPlay} />
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
          <p>{data.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
