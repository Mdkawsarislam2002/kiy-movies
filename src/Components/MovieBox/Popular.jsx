import React, { useEffect, useState } from "react";

import { PopularMovie } from "../../api";
import PerMovie from "../../Components/PerMovie";

const Popular = () => {
  const [ListOfMovie, setListOfMovie] = useState([]);

  useEffect(() => {
    fetch(PopularMovie)
      .then((res) => res.json())
      .then((data) => {
        setListOfMovie(data.results);
      });
  }, []);

  return (
    <>
      <div className="m-4">
        <h2 className="text-xl font-bold mx-2 "> Popular Movie Right Now </h2>
        <div className=" flex overflow-x-scroll ">
          {ListOfMovie &&
            ListOfMovie.map((movieData, index) => {
              return (
                <div key={movieData.id}>
                  <PerMovie
                    title={movieData.title}
                    voteAverage={movieData.vote_average}
                    voteCount={movieData.vote_count}
                    poster={movieData.poster_path}
                  />
                </div>
              );
            })}

          <PerMovie />
        </div>
      </div>
    </>
  );
};

export default Popular;
