import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({data}) => {
    const image_url='https://image.tmdb.org/t/p/w500';
  return (
    <>
    <div className="w-64 mx-4 my-8 hover:scale-110 hover:duration-150"> {/* Adjust the width as needed */}
      <Link to={`/movie/${data.id}`} className="block">
        <div className="flex flex-wrap justify-center items-center border-spacing-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.original_title}
            className="w-full h-96 object-cover rounded-md"
          />
        </div>
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2 text-center text-white ">{data.original_title}</div>
          <p className="text-white text-base text-center">Rating : {Math.round(data.vote_average*10)/10}</p>
        </div>
      </Link>
    </div>
    
    </>

  )
}

export default MovieCard