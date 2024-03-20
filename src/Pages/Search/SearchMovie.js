import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../../Components/Card/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchContext } from "../../Hooks/ContextApi";
import Pagination from "../../Components/Pagination/Pagination";

const SearchMovie = () => {
  const { searchKey } = useSearchContext();
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const [movieData, setMovieData] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [pagenationno, setPagenationno] = useState();

  const getMoviedata = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${searchKey}&page=${pageno}`,
    );
    setMovieData(data.results);
    setPagenationno(data.total_pages); // Set total pages for pagination
  };
  useEffect(() => {
    getMoviedata();
  }, [pageno]);

  const handleClick = (number) => {
    setPageno(number);
  };
  return (
    <>
      <Container fluid className="bg-slate-500">
        <Row className="justify-content-center">
          {movieData && movieData.length > 0 ? (
            movieData.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard data={item} />
              </Col>
            ))
          ) : (
            <div className="text-white text-2xl p-7 justify-items-center">
              No Data Found.
            </div>
          )}
        </Row>
        {pagenationno && pagenationno > 1 && (
          <Pagination
            maxnum={pagenationno}
            activenum={pageno}
            handleClick={handleClick} // Corrected prop name
          />
        )}
      </Container>
    </>
  );
};

export default SearchMovie;
