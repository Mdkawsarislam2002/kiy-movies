import React, { useEffect } from "react";

import TopArea from "../Components/HomePages/TopArea";
import Popular from "../Components/MovieBox/Popular";
import PopUpCard from "../Components/HomePages/PopUpCard";
import TopRated from "../Components/TopRatedPage/TopRated";
import NowPlaying from "../Components/slider/MoviePages/NowPlaying";
const Home = () => {
  return (
    <div>
      <PopUpCard />
      <TopArea />
      <Popular />
      <TopRated />
      <NowPlaying />
    </div>
  );
};

export default Home;
