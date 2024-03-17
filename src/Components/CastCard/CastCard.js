import React from 'react'

const CastCard = ({data}) => {
    
  return (
    <>
    <div className="w-64  mx-auto  "> {/* Adjust the width as needed */}
      <div className="block">
        <div className="flex flex-wrap justify-center items-center border-spacing-0">
          <img
            src={ data.profile_path != null ? `https://image.tmdb.org/t/p/w500${data.profile_path}` :`https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg`}
            alt={data.original_title}
            className="w-full h-96 object-cover rounded-md"
          />
        </div>
        <div className="px-6 py-2">
          <div className="font-bold text-xl mb-2 text-center text-white ">{data.name}</div>
          <p className="text-white text-base text-center">Character : {data.character }</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default CastCard