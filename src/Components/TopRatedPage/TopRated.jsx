import React, { useEffect, useState } from "react";
import SwiperSlider from "../slider/Swipper";
import useFetch from "../../Hooks/useFetch";

const TopRated = () => {
  const [TopMovie, SetTopMovie] = useState([]);

  const popular = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b`;
  const TopRatedApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=1`;
  const TopRatedApiPage2 = `https://api.themoviedb.org/3/movie/top_rated?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=2`;
  const NowPlayinh = `
 https://api.themoviedb.org/3/movie/now_playing?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=1`;
  const { FinalData, IsLoading, IsError } = useFetch(TopRatedApi);
  return (
    <div>
      <div className=" text-2xl font-bold m-7   ">Top Rated Movies For You</div>
      <SwiperSlider apiData={FinalData} />
      <SwiperSlider apiData={TopRatedApiPage2} />
    </div>
  );
};

export default TopRated;
