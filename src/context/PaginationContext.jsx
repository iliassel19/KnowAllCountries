import { createContext } from "react";

const PaginationContext = createContext({
  currentPage: 1,
  togglePagination: () => {},
});

export default PaginationContext;
