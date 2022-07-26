import React, { useEffect } from "react";

import TopArea from "../Components/HomePages/TopArea";
import Popular from "../Components/MovieBox/Popular";
import PopUpCard from "../Components/HomePages/PopUpCard";
import TopRated from "../Components/TopRatedPage/TopRated";

const Home = () => {
  return (
    <div>
      <PopUpCard />
      <TopArea />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
