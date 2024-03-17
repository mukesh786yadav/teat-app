import React from 'react'
import ReactPaginate from 'react-paginate'
import './style.css'

const Pagination = (props) => {
    const{maxnum,activenum,handleClick}=props;
    const forPageActive = parseInt(activenum)-1;
    const handlePageClick =(e)=>{
        //console.log('hello', e.selected);
        let pageNo = parseInt(e.selected)+1;
        handleClick(pageNo);
        window.scrollTo(0,0)
    }


  return (
    <>
     <div className="flex justify-center my-4 gap-2 sm:gap-0 sm:flex-wrap sm:justify-center">
  <ReactPaginate
    breakLabel="..."
    nextLabel="Next >"
    previousLabel="< Previous"
    marginPagesDisplayed={2}
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={maxnum}
    renderOnZeroPageCount={null}
    forcePage={forPageActive}
    containerClassName="pagination"
    pageClassName="page-item"
    pageLinkClassName="page-link px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    activeClassName="active"
    previousClassName="page-item"
    nextClassName="page-item"
    previousLinkClassName="page-link px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    nextLinkClassName="page-link px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  />
</div>
    </>
  )
}

export default Pagination