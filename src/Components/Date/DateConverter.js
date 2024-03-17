import React from 'react'

const DateConverter = ({date}) => {
    const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  
    return (
        <p className='text-white'>Release Date  : {formattedDate}</p>
    );
}

export default DateConverter