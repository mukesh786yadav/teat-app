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
     <div className="flex justify-center my-4">
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
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
      />
    </div>
    </>
  )
}

export default Pagination