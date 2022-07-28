import React from "react";
import { motion } from "framer-motion";
import { BackArrow } from "./Icon";

const GreenPopUp = ({ setIsThere, setSearchValue, SearchValue }) => {
  return (
    <>
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        className="w-full text-white bg-emerald-500"
      >
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          <div className="flex">
            <span
              className="cursor-pointer"
              onClick={() => {
                setIsThere(false);
                setSearchValue("");
              }}
            >
              <BackArrow />
            </span>

            <p className="mx-3 text-gray-100">
              Search Result For
              <span className="text-xl font-bold ml-2 text-gray-50">
                {SearchValue}.
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GreenPopUp;
