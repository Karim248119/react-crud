import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ searchProduct }) {
  return (
    <div className="w-[80%] mx-auto my-10  p-3 bg-gray-200 shadow-sm sm:text-sm rounded-md flex justify-center items-center">
      <input
        type="text"
        placeholder="Search products..."
        onChange={searchProduct}
        className="flex-1  focus:outline-none bg-gray-200 "
      />
      <FaSearch />
    </div>
  );
}
