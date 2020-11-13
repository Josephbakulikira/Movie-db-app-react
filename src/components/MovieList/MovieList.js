import React , {Fragment, useState, useEffect} from 'react'
import Movie from '../Movie/Movie'
import {Container} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

import './movieList.css'
export default function MovieList({movieList, pages, page, RequestChange, requestValue, genre}) {
    
    const handlePageClick =  (event) => {
        RequestChange(requestValue, event.selected+1)
    }
    
    return (
        <Fragment>
        
        <Container className="movieList" >
        {movieList ? (movieList.length ? movieList.map((movie, index) => <Movie genre={genre} movie={movie} key={index}  /> ) : "Loading ..."): "Nothing" } 
        
        
        </Container>
      <br></br>
      <br></br>

        <Container className='d-flex justify-content-center'>
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        initialSelected={page-1}
        forcePage={page-1 === 0? 0 : page}
        breakClassName={'break-me'}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        />
        </Container>
        </Fragment>

    )
}
