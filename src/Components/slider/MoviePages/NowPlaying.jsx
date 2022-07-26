import React, { useState } from "react";
import SwiperSlider from "../../slider/Swipper";
import useFetch from "../../../Hooks/useFetch";

const NowPlaying = () => {
  const [TopMovie, SetTopMovie] = useState([]);
  const NotPlayingMovie = `https://api.themoviedb.org/3/movie/upcoming?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=1`;
  const NotPlayingMoviePageTwo = `https://api.themoviedb.org/3/movie/upcoming?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page2`;

  const { FinalData, IsLoading, IsError } = useFetch(NotPlayingMovie);
  return (
    <div>
      <div className=" text-2xl font-bold m-7   ">Now Playing Movies </div>
      <SwiperSlider apiData={FinalData} />
      <SwiperSlider apiData={NotPlayingMoviePageTwo} />
    </div>
  );
};

export default NowPlaying;
