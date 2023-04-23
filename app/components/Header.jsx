"use client";
import Link from "next/link";
import { useState } from "react";
// import {SearchIcon} from "@heroicons/react"

const Header = ({ getSearchResults }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(query)
    const res = await fetch(`/api/movies/search?query=${query}`);
    const movies = await res.json();
    getSearchResults(movies);
  };

  return (
    <div
      className="flex justify-between bg-black p-5 my-5"
      style={{ position: "sticky", top: 0 }}
    >
      <Link href="/" className="text-red-600 font-black">
        NETMOVIES
      </Link>
      <div className="flex items-center">
        {/* <SearchIcon/> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <form method="GET" onSubmit={handleSubmit}>
          <input
            className="pl-2 bg-black outline-none"
            type="text"
            placeholder="Search by title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
