// ContextApi.js

import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState('');

  const updateSearchKey = (key) => {
    setSearchKey(key);
  };

  return (
    <SearchContext.Provider value={{ searchKey, updateSearchKey }}>
      {children}
    </SearchContext.Provider>
  );
};
