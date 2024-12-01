import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import "./DetailCard.style.css"

const DetailCard = ({data}) => {
    const { data: genreData } = useMovieGenreQuery()

    const showGenre = (genreIdList) => {
        if (!genreData || !genreIdList) return [];
        const genreNameList = genreIdList.map((id) => {
          const genreObj = genreData.find((genre) => genre.id === id);
          return genreObj ? genreObj.name : "Unknown";
        });
        return genreNameList;
      };
  return (
    <Container>
    <Row className="row">
      <Col lg={6} className="movie-img">
        <img
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
        />
      </Col>
      <Col lg={6}>
        <div>
          {showGenre(data.genres.map((data) => data.id)).map((genre) => (
            <Badge bg="danger" className="redBadge-genre">
              {genre}
            </Badge>
          ))}
        </div>
        <h1 className="title-style">{data.title}</h1>
        <h3 className="tagline-style">{data.tagline}</h3>
        <div className="reputation-style">
          <div className="votes-style">
            <img
              className="vote-style"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
            />
            {data.vote_average}
          </div>
          <div className="users-style">
            <FontAwesomeIcon icon={faUsers} className="popularity-style"/>
            {data.popularity}{" "}
          </div>
          <div className="adult-style">
            {data.adult ? (
              <Badge bg="danger" >+19</Badge>
            ) : (
              <Badge bg="success">All</Badge>
            )}
          </div>
        </div>
        <div className="overview-style">{data.overview}</div>
        <div>
          <Badge bg="danger" className="redBadge-data">
            Budget
          </Badge>
          $ {data.budget}
        </div>
        <div>
          <Badge bg="danger" className="redBadge-data">
            Revenue
          </Badge>
          $ {data.revenue}
        </div>
        <div>
          <Badge bg="danger" className="redBadge-data">
            Release Data
          </Badge>
          {data.release_date}
        </div>
        <div>
          <Badge bg="danger" className="redBadge-data">
            Run time
          </Badge>
          {data.runtime}분
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default DetailCard