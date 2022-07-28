import React from "react";
import { motion } from "framer-motion";

import LoaderImg from "../assets/TheLoader.svg";
import Loader from "../Components/Loader";
import GreenPopUp from "./GreenPopUp";
import MovieData from "./slider/MoviePages/MovieData";

const SearchResultShow = ({
  SearchResult,
  setIsThere,
  setSearchValue,
  SearchValue,
  IsExist,
}) => {
  return (
    <>
      <GreenPopUp
        SearchValue={SearchValue}
        setSearchValue={setSearchValue}
        setIsThere={setIsThere}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden    sm:grid-cols-2 flex-wrap   sm:gap-4 justify-center">
        {IsExist ? (
          <div className="grid place-items-center w-screen h-screen">
            <motion.img
              initial={{
                scale: [1, 1.1, 1.2, 0.8, 1.1, 0.9, 1],
              }}
              animate={{
                scale: [1, 1.1, 1.2, 0.8, 1.1, 0.9, 1],
              }}
              exit={{ scale: 0 }}
              src={LoaderImg}
            />
          </div>
        ) : (
          SearchResult.map((data, index) => {
            return (
              <motion.div
                className="mt-4 mx-10 sm:mx-2"
                initial={{
                  x: index % 2 === 0 ? "-200vw" : "50vw",
                  y: -100,
                }}
                animate={{
                  x: 0,
                  y: 0,
                }}
                transition={{
                  delay: (index / 2) * 0.5,
                  duration: 0.5,
                }}
              >
                <MovieData
                  className="mx-10 my-10"
                  title={data.title}
                  voteAverage={data.vote_average}
                  voteCount={data.vote_count}
                  poster={data.poster_path}
                />
              </motion.div>
            );
          })
        )}
      </div>
    </>
  );
};

export default SearchResultShow;
