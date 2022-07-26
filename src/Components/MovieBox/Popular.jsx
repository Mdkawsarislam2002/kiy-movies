import React, { useEffect, useState } from "react";
// import SwiperSlider from "../slider/Swipper";
import SwiperSlider from "../slider/Swipper";
import useFetch from "../../Hooks/useFetch";

const Popular = () => {
  const PopularMoviePage1 = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=1`;
  const PopularMoviePage2 = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=2`;
  const PopularMoviePage3 = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=3`;

  const { FinalData, IsLoading, IsError } = useFetch(PopularMoviePage1);
  return (
    <div>
      <div className=" text-2xl font-bold m-7   ">Most Popular Movies </div>
      <SwiperSlider apiData={FinalData} />
      <SwiperSlider apiData={PopularMoviePage2} />
      <SwiperSlider apiData={PopularMoviePage3} />
    </div>
  );
};

export default Popular;
