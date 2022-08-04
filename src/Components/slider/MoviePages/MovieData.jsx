import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Star } from "../../Icon";

const MovieData = ({ title, poster, voteAverage, MovieId }) => {
  let BaseImg = `https://image.tmdb.org/t/p/w500/`;
  let PosterImg = BaseImg + poster;

  const GetMovieDetailsHandler = (e) => {
    console.log("clicked");
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <motion.div className="flex flex-col items-center justify-center  min-w-sm mx-auto">
        <div
          className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{ backgroundImage: `url(${PosterImg})` }}
        ></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
          <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {title}
          </h3>

          <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span className="flex items-center justify-center">
              <span className="font-bold text-gray-800 dark:text-gray-200">
                {voteAverage}
              </span>
              <span>
                <Star />
              </span>
            </span>

            <Link
              state={MovieId}
              to={"/home/movie"}
              onClick={GetMovieDetailsHandler}
            >
              <div className="px-4 py-2 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Play Now
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MovieData;
