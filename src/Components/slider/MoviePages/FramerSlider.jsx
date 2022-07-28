import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import MovieData from "./MovieData";

const FramerSlider = (props) => {
  const { apiData, IsLoading, IsError } = props;

  const [SliderWidth, setSliderWidth] = useState(0);
  const SliderRef = useRef();

  useEffect(() => {
    setSliderWidth(
      SliderRef.current.scrollWidth - SliderRef.current.offsetWidth
    );
  }, []);
  return (
    <div>
      {IsError && <h2>There Is An Error </h2>}
      <motion.div ref={SliderRef} className=" p-2 overflow-hidden  ">
        <motion.div
          drag="x"
          dragConstraints={{
            right: 0,
            left: -SliderWidth,
          }}
          className="flex gap-x-4 md:gap-x-2  "
        >
          {apiData.results &&
            apiData.results.map((data, index) => {
              return (
                <motion.div>
                  <MovieData
                    title={data.title}
                    voteAverage={data.vote_average}
                    voteCount={data.vote_count}
                    poster={data.poster_path}
                  />
                </motion.div>
              );
            })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FramerSlider;
