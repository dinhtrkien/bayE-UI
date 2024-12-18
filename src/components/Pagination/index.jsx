import React, {useState} from "react";


const MAX_VISIBLE_PAGES = 3;
const PAGE_GAP = 2;

export const START_PAGE_INDEX = 1;

const usePagination = ({ page, total } = { page: 1, total: 0 }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [totalPages, setTotalPages] = useState(total);
  const next = () => {
    console.log(totalPages)
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  const previous = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  return { currentPage, totalPages, next, previous, setCurrentPage, setTotalPages }
}

const Pagination = ({ totalPages, currentPage, onPageChange, onNext, onPrevious }) => {


  // Helper function to calculate the pagination structure
  const getPagination = () => {
    const pages = [];
    if (totalPages <= MAX_VISIBLE_PAGES + 2) {
      // If total pages are less than the max visible pages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }
    // Always show the first page
    pages.push(1);
    // Add ellipses before the current chunk if needed
    if (currentPage > MAX_VISIBLE_PAGES) {
      pages.push("...");
    }
    // Add the current chunk (centered around currentPage)
    const start = currentPage >= totalPages - MAX_VISIBLE_PAGES ? Math.max(PAGE_GAP, currentPage - PAGE_GAP) : Math.max(PAGE_GAP, currentPage - 1);
    const end = currentPage <= MAX_VISIBLE_PAGES ? Math.min(totalPages - 1, currentPage + PAGE_GAP) : Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ellipses after the current chunk if needed
    if (currentPage + 1 < totalPages - PAGE_GAP) {
      pages.push("...");
    }

    // Always show the last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  if(totalPages === 0) return null;

  return (
    <div className="join flex-wrap gap-2">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className={`join-item btn ${
          currentPage === 1 ? "btn-disabled" : ""
        }`}
      >
        Prev
      </button>

      {/* Page Buttons */}
      {getPagination().map((page, index) => {
        if (page === "...") {
          return (
            <button
              key={index}
              className="join-item btn btn-disabled"
              aria-disabled="true"
            >
              ...
            </button>
          );
        }

        return (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`join-item btn ${
              page === currentPage ? "btn-active" : ""
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={onNext}
        className={`join-item btn ${
          currentPage === totalPages ? "btn-disabled" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export { usePagination }

export default Pagination;
