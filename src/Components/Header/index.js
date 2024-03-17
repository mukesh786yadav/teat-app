import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';


import {useSearchContext} from '../../Hooks/ContextApi';


const Header = () => {
  
  const navigate = useNavigate();
    const { updateSearchKey } = useSearchContext();
  const [searchKey, setSearchKey] = useState('');

  const movieSearch = (e) => {
    e.preventDefault();
    updateSearchKey(searchKey);
      
    navigate("/search-movie");
    setSearchKey('');
    
  };
  useEffect( ()=>{
   //movieSearch();
  },[searchKey])


  return (
    <Navbar expand="lg" className="bg-body-tertiary p-4 shadow  mb-2 bg-body rounded" >
      <Container fluid style={{ width: '85%'}} p-10>
        <Navbar.Brand href="/" className='fs-2'>MovieDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            
          </Nav>
          <Nav.Link  className="mx-3 font-medium" > <Link to="/" className='no-underline text-xl font-semibold text-slate-600 hover:underline hover:text-neutral-950'>Popular</Link> </Nav.Link>
          <Nav.Link  className="mx-3 font-medium" > <Link to="/top-rated-movie" className='no-underline text-xl font-semibold text-slate-600 hover:underline hover:text-neutral-950'>Top Rated</Link> </Nav.Link>
          <Nav.Link  className="mx-3 font-medium" > <Link to="/upcoming-movie" className='no-underline text-xl font-semibold text-slate-600 hover:underline hover:text-neutral-950'>Upcoming</Link> </Nav.Link>
          
          <form className="d-flex" onSubmit={movieSearch}>
            <input 
              className="form-control me-2 fs-6"
              
              type="search"
              placeholder="Search Movies"
              aria-label="Search"
              value={searchKey}
              onChange={ (e)=>setSearchKey(e.target.value)}
              
              
            />
            <button className="btn btn-outline-success fs-5 " type="submit">
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