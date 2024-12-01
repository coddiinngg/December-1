import React, { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import Alert from "react-bootstrap/Alert";
import ReactPaginate from "react-paginate";
import "./Moviespage.style.css";
import DropdownList from "./component/Dropdown/DropdownList";
import Loading from "../../common/Loading/Loading";

const Moviespage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortPopularity, setSortPopularity] = useState(false);
  const [movieGenre, setMovieGenre] = useState("");  

  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  useEffect(() => {
    if (data?.results) {
      const sortedMovies = [...data.results];
      if (sortPopularity) {
        sortedMovies.sort((a, b) => a.popularity - b.popularity);
      } else {
        sortedMovies.sort((a, b) => b.popularity - a.popularity);
      }
      data.results = sortedMovies;
    }
  }, [data, sortPopularity]);

  const filteredMovies = data?.results?.filter((movie) => {
    if (!movieGenre) return true;   
    return movie.genre_ids.includes(movieGenre); 
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <Container className="MoviePage-frame">
      <DropdownList
        setSortPopularity={setSortPopularity}
        setMovieGenre={setMovieGenre} 
      />
      <Row>
        {filteredMovies?.map((movie, index) => (
          <Col key={index} lg={3} md={4} xs={6}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={data.total_pages}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        forcePage={page - 1}
      />
    </Container>
  );
};

export default Moviespage;
