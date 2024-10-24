const Pagination = ({ currentPage, totalPages = 10, onPageChange }) => {
  function generateNumberOfPages() {
    const pages = new Array();
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  return (
    <div className="">
      <button
        className={`px-3 py-2  rounded-xl font-bold text-white ${
          currentPage === 1 ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600"
        } `}
        onClick={() => {
          onPageChange((currentPage -= 1));
        }}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {generateNumberOfPages().map((page, _) => (
        <button
          className={`px-3 py-2 mx-2 text-white rounded-xl font-bold ${
            page === currentPage ? "bg-green-800" : "bg-green-300"
          }`}
          onClick={() => onPageChange(page)}
          key={page}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => {
          onPageChange((currentPage += 1));
        }}
        disabled={currentPage === totalPages}
        className={`px-3 py-2  rounded-xl font-bold text-white ${
          currentPage === totalPages
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-600"
        } `}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
