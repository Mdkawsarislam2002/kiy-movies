import React from "react";
import { Star } from "./Icon";
import { motion } from "framer-motion";

const PerMovie = ({ title, poster, voteAverage, voteCount }) => {
  let BaseImg = `https://image.tmdb.org/t/p/w500/`;
  let PosterImg = BaseImg + poster;

  return (
    <>
      <motion.div
        drag
        dragConstraints={{
          top: 0,
          bottom: 0,
          left: 5,
          right: 5,
        }}
        whileHover={{
          scale: 1.1,
        }}
        className="  w-72   lg:mx-3 my-2"
   
      >
        <div className=" mx-20 md:mx-auto">
          <div
            style={{ backgroundImage: `url(${PosterImg})` }}
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          ></div>

          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              {title}
            </h3>

            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold flex items-center text-gray-800 dark:text-gray-200">
                <span>{voteAverage}</span> <Star />
              </span>
              <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Details
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PerMovie;
