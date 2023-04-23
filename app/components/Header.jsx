import Link from "next/link";
// import {SearchIcon} from "@heroicons/react"

const Header = () => {
  return (
    <div className="flex justify-between bg-black p-5" style={{ position: "sticky", top: 0 }}>
      <Link href="/" className="text-red-600 font-black">
        NETMOVIES
      </Link>
      <div className="flex">
        {/* <SearchIcon/> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input className="pl-2 bg-black outline-none" type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Header;
