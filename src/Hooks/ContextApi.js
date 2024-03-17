// import React from 'react'
// import { createContext } from 'react'


// const myContex = createContext('');

// const ContextApi = ({children}) => {
//   return <myContex.Provider value='mukesh'>{children}</myContex.Provider>
  
// }

// export {myContex,ContextApi}
import React, { createContext, useState } from 'react';

const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: () => {},
});

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (newTerm) => {
    setSearchTerm(newTerm);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleSearchTermChange }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;