import React, { useState } from "react";
import Pagination from "./Pagination";

const PaginationTest = () => {
  const dummyData = Array.from({ length: 100 }, (_, index) => {
    return {
      id: index + 1,
      name: `Product ${index + 1}`,
      description: `This is Product ${index + 1}`,
    };
  });
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="w-[100%] h-[100vh] bg-slate-700 flex flex-col justify-center items-center">
      <h1 className="text-red-300 text-3xl font-bold mb-2">Pagination</h1>
      <ul>
        {currentItems.map((item) => (
          <li
            className="p-2 bg-violet-300 text-gray-800 font-semibold rounded-md my-2"
            key={item.id}
          >
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationTest;
