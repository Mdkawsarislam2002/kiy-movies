import React, { useEffect } from "react";

import TopArea from "../Components/HomePages/TopArea";
import PopUpCard from "../Components/HomePages/PopUpCard";
import NowPlaying from "../Components/slider/NowPlaying";
import Popular from "../Components/slider/Popular";

const Home = () => {
  return (
    <div>
      <PopUpCard />
      <TopArea />
      <NowPlaying />
      <Popular />
    </div>
  );
};

export default Home;
