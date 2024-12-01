import React, { useState } from "react";
import "./DropdownList.style.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useMovieGenreQuery } from "../../../../hooks/useMovieGenre";

const DropdownList = ({ setSortPopularity, setMovieGenre }) => {
  const [selectedOption, setSelectedOption] = useState(true);

  const { data: genreData } = useMovieGenreQuery();

  const handleSortChange = (sortType) => {
    setSelectedOption(sortType);
    setSortPopularity(sortType);
  };

  return (
    <div className="dropdown">
      <Dropdown className="dropdown-margin">
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          {selectedOption ? "인기 많은 순" : "인기 적은 순"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSortChange(true)}>
            인기 많은 순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleSortChange(false)}>
            인기 적은 순
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="dropdown-margin">
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          장르
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {genreData?.map((genre) => (
            <Dropdown.Item
              key={genre.id} 
              onClick={() => setMovieGenre(genre.id)}
            >
              {genre?.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownList;
