import React from 'react'

const search = () => {
  return (
        <>
        <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movies"
              aria-label="Search"
            //   value={searchKey}
            //   onChange={ (e)=>setSearchKey(e.target.value)}
            //   onKeyPress={movieSearch}
              
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </>
  )
}

export default search