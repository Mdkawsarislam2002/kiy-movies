import React from "react";
import useFetch from "../../Hooks/useFetch";
import FramerSlider from "./MoviePages/FramerSlider";
import Loader from "../../assets/leading-spiner.svg";

const NowPlaying = () => {
  const PopularMovie = `https://api.themoviedb.org/3/movie/upcoming?api_key=b59349f0c2f8513bb5cbf2003ec8678b&language=en-US&page=1`;

  const { FinalData, IsLoading, IsError } = useFetch(PopularMovie);

  return (
    <div>
      <div className=" text-2xl font-bold m-7   ">Top Rated Movie </div>
      {IsLoading ? (
        <div>
          <img src={Loader} />
        </div>
      ) : (
        <FramerSlider
          IsError={IsError}
          IsLoading={IsLoading}
          apiData={FinalData}
        />
      )}
    </div>
  );
};

export default NowPlaying;
