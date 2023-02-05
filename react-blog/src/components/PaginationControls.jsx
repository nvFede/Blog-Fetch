import React from "react";

const PaginationControls = ({ data, page, setPage, pageSize, setPageSize }) => {
  return (
    <div className="flex flex-row self-center mt-12">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        disabled={data.length < pageSize}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
      {/* <input type="number" value={pageSize} onChange={e => setPageSize(e.target.value)} /> */}
    </div>
  );
};

export default PaginationControls;
