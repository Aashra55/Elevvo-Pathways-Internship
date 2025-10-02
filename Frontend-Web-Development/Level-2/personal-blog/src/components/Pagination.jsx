export default function Pagination({ currentPage, totalPages, setPage }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8 mb-4">
      <button
        className="px-4 py-2 md:px-6 md:text-lg pagination-color rounded disabled:opacity-50 regular-font font-bold"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        style={{backgroundColor:"0077b6"}}
      >
        Prev
      </button>
      <span className="text regular-font">{currentPage} / {totalPages}</span>
      <button
        className="px-4 md:px-6 md:text-lg py-2 pagination-color rounded disabled:opacity-50 regular-font font-bold"
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
