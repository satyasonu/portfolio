import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <div className="absolute mt-16 flex justify-center w-full">
        <div className="w-9/12  h-[70vh] flex flex-col justify-center items-center">
          <div className="border-slate-950 border-[1px] rounded-full animate-bounce dark:border-slate-300">
            <IoIosArrowRoundDown size={70} />
          </div>
          <Link class="inline-flex" to="/profile">
            <span class="h-12 flex items-center justify-center uppercase font-semibold px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out dark:border-slate-300 dark:hover:bg-black  dark:hover:transition-transform">
              Portfolio
            </span>
            <span class="h-12 w-12 flex-shrink-0 flex items-center justify-center border border-l-0 border-black hover:bg-black hover:text-white transition duration-500 ease-in-out dark:border-slate-300">
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="chevron-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="svg-inline--fa fa-chevron-right fa-w-8 fa-9x h-3 w-3"
              >
                <path
                  fill="currentColor"
                  d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                />
              </svg>
            </span>
          </Link>
          <span className="text-slate-500 dark:text-slate-500 mt-10">This page has been designed using React and Tailwind css.</span>
        </div>
      </div>
    </>
  );
};

export default Home;
