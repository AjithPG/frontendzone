import React from "react";

export default function SearchBar() {
  return (
    <div className="relative flex-1 sm:flex-none sm:w-2/4">
      <div className="searchbar flex items-center">
        <div className="icon absolute left-4">
          <i className="ri-search-line"></i>
        </div>
        <input
          type="search"
          placeholder="Search here.. "
          className="bg-white pl-11 pr-11 py-3 w-full rounded-xl outline-none"
        />
         <div className="icon absolute right-4 cursor-pointer">
             <i className="ri-equalizer-line"></i>
        </div>
      
      </div>
    </div>
  );
}
