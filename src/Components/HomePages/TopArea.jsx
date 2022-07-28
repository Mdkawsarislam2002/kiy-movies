import React from "react";
import { Search } from "../Icon";
import Banner from "../../assets/strangeBannderMini.jpg";

const TopArea = ({ SearchValue, SearchUserValue, OnSearch }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className=" bg-center bg-cover p-6 lg:p-5 bg-no-repeat bg-blue-700/70 text-white"
      >
        <div className="p-4">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-200">
            Welcome.
          </h3>
          <h1 className=" text-2xl lg:text-4xl font-extrabold text-gray-100">
            Millions of movies For Your . Watch Now
          </h1>
        </div>

        <form onSubmit={OnSearch} className="p-5 lg:pt-20">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <Search />
            </div>
            <input
              onChange={SearchUserValue}
              value={SearchValue}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movie...."
              required=""
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TopArea;
