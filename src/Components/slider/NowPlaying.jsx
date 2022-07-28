import React from "react";
import useFetch from "../../Hooks/useFetch";
import FramerSlider from "./MoviePages/FramerSlider";
import Loader from "../../assets/leading-spiner.svg";

const NowPlaying = () => {
  const NotPlayingMovie = `https://api.themoviedb.org/3/movie/upcoming?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=1`;

  const { FinalData, IsLoading, IsError } = useFetch(NotPlayingMovie);

  return (
    <div>
      <div className=" text-2xl font-bold m-7   ">Now Playing </div>
      {IsLoading ? (
        <div>
          <img src={Loader} />
        </div>
      ) : (
        <FramerSlider IsLoading={IsLoading} apiData={FinalData} />
      )}
    </div>
  );
};

export default NowPlaying;
