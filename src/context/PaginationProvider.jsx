import React, { useState } from "react";
import PaginationContext from "./PaginationContext";
const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const togglePagination = (page) => {
    setCurrentPage(page);
  };
  return (
    <PaginationContext.Provider value={{ currentPage, togglePagination }}>
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
