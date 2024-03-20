import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DateConverter from "../../Components/Date/DateConverter";
import CastCard from "../../Components/CastCard/CastCard";

const SingleMovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const [castDetail, setCastDetail] = useState({});
  const [genreNames, setGenreNames] = useState([]);
  const movie_id = useParams(); // Destructure movie_id from useParams()
  //console.log(movie_id.id);
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id.id}?api_key=${Api_key}&language=en-US`
      );
      //console.log(data);
      setMovieData(data);
      // Extract genre names
      const genreNames = data.genres.map((genre) => genre.name);
      setGenreNames(genreNames);
    } catch (error) {
      console.log(error);
    }
  };
  
  const fetchCastData = async () =>{
    try {
      const castData = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id.id}/credits?api_key=${Api_key}&language=en-US`)
      console.log(castData.data.cast);
      setCastDetail(castData.data.cast);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
    fetchCastData();
  }, [movie_id.id]); 

  return (
    <>
      <Container fluid className="bg-slate-500  p-4">
        <Container fluid className="bg-slate-800 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First section - Card with image and title */}
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              
              <div className=" ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                  alt={movieData.title}
                  className="w-64 h-96 mb-4"
                />
                <h2 className="text-xl font-bold mb-1 text-white">Overview</h2>
                <p className="text-white ">{movieData.overview}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1 text-white">
                  {movieData.title}
                </h2>
                <h3 className="text-xl font-bold mb-1 text-blue-600">
                  Rating : {Math.round(movieData.vote_average * 10) / 10}
                </h3>
                <div className="flex gap-1 mb-1 ">
                  <div className="border border-indigo-600 h-8  rounded items-center">
                    <p className=" text-white p-2">{movieData.runtime} Min</p>
                  </div>
                  <div>
                    <ul className="flex gap-1">
                      {genreNames.map((genreName, index) => (
                        <li className="text-white" key={index}>
                          {genreName},
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                 <DateConverter date={movieData.release_date}></DateConverter> 
              </div>
            </div>
            
            {/* Second section - Full-width image */}
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
                alt={movieData.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
        <h1 className="text-white py-3">Cast</h1>
        <Container fluid className="bg-slate-500 p-4">
        <Row className="justify-content-center">
          {castDetail && castDetail.length > 0 ? (
            castDetail.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                <CastCard data={item} />
              </Col>
            ))
          ) : (
            'Loading.....'
          )}
        </Row>
      </Container>
      </Container>
    </>
  );
};

export default SingleMovieDetails;
