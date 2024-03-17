import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';

import SearchContext from '../../Hooks/ContextApi';


const Header = () => {
  
  const { searchTerm, handleSearchTermChange } = useContext(SearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const newTerm = e.target.value;
    handleSearchTermChange(newTerm); // Update search term in context
    //navigate(`/search?query=${newTerm}`); // Navigate with query
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{height:'50%'}}>
      <Container fluid style={{ width: '85%'}} p-10>
        <Navbar.Brand href="#">MovieDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
          </Nav>
          <Nav.Link  className="mx-3 font-medium" > <Link to="/" className='no-underline text-lg font-semibold text-slate-800'>Popular</Link> </Nav.Link>
          <Nav.Link  className="mx-3 font-medium" > <Link to="/top-rated-movie" className='no-underline text-lg font-semibold text-slate-800'>Top Rated</Link> </Nav.Link>
          <Nav.Link  className="mx-3 font-medium" > <Link to="/upcoming-movie" className='no-underline text-lg font-semibold text-slate-800'>Upcoming</Link> </Nav.Link>
          
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movies"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => handleSearchTermChange(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* <Button  className='bg-slate-500'> <Link to="/search-movie" className='no-underline text-lg font-semibold text-slate-800'>Search</Link> </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header