import React from "react";
import useFetch from "../../Hooks/useFetch";
import FramerSlider from "./MoviePages/FramerSlider";
import Loader from "../../assets/leading-spiner.svg";

const NowPlaying = () => {
  const PopularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b`;

  const { FinalData, IsLoading, IsError } = useFetch(PopularMovie);

  return (
    <div>
      <div className=" text-2xl font-bold m-7   ">Most Popular Movies </div>
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
