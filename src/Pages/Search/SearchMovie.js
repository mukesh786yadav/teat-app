import axios from 'axios';
import React, { useContext } from 'react'
import { useState,useEffect } from 'react'
import MovieCard from '../../Components/Card/MovieCard';
import { Container,Row,Col } from 'react-bootstrap';
import SearchContext from '../../Hooks/ContextApi';


const SearchMovie = () => {

  
  const Api_key = "c45a857c193f6302f2b5061c3b85e743";
  const { searchTerm } = useContext(SearchContext);
  console.log(searchTerm)
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchQuery = new URLSearchParams(window.location.search).get('query'); // Get search query from URL
  console.log(searchQuery)
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);

      try {
        
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${searchTerm}&page=1`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);
  
  
  return (
    <>
    
    <Container fluid className="bg-slate-500">
        <Row className="justify-content-center">
          {movies && movies.length > 0 ? (
            movies.map((item) => (
              <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard data={item} />
              </Col>
            ))
          ) : (
            'Loading.....'
          )}
        </Row>
      </Container>
    </>
  )
}

export default SearchMovie