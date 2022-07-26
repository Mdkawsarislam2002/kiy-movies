import React from "react";
import SwiperSlider from "../slider/Swipper";

const TopRated = () => {
  const popular = `https://api.themoviedb.org/3/movie/popular?api_key=b59349f0c2f8513bb5cbf2003ec8678b`;
  const TopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=b59349f0c2f8513bb5cbf2003ec8678b&page=1`;

  return (
    <div className="border-2 border-red-700 ">
      <div>Top Rated Movies For You </div>
      <SwiperSlider />
    </div>
  );
};

export default TopRated;
