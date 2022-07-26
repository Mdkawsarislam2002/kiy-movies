import React, { useEffect, useState } from "react";
import { Search } from "../Icon";

const TopArea = () => {
  const [Banner, setBanner] = useState("");
  const PopularMoviePage1 = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=1`;
  const baseUrl = `https://image.tmdb.org/t/p/w500/`;

  useEffect(() => {
    let RandomBanner = Math.floor(Math.random() * 19);
    fetch(PopularMoviePage1)
      .then((res) => res.json())
      .then((data) => {
        setBanner(`${baseUrl}${data.results[RandomBanner].backdrop_path}`);
      });
  }, []);

  // const BackBanner = `https://th.bing.com/th/id/R.9679e7f6d0f7ef4a8da37b432cc253c1?rik=vbj3cxkrAlUuVQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-lhWVhiKg-5Y%2fT6d4IMh517I%2fAAAAAAAABAU%2fcDsT5jgwKO8%2fs640%2f380179_3725160404433_1138586789_3533964_1829705938_n.jpg&ehk=a15wlRjOtKP8ckTiBFTuodryZHmiP5lmsBnyfXf%2ftAY%3d&risl=&pid=ImgRaw&r=0`;

  return (
    <>
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className=" bg-center bg-cover p-6 lg:p-5 bg-no-repeat bg-blue-700/70 text-white"
      >
        <div className="p-4">
          <h3 className="text-xl lg:text-2xl">Welcome.</h3>
          <h1 className=" text-2xl lg:text-4xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h1>
        </div>

        <form className="p-5 lg:pt-20">
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
