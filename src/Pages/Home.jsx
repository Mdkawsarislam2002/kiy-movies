import React, { useEffect } from "react";

import TopArea from "../Components/HomePages/TopArea";
import Popular from "../Components/MovieBox/Popular";
import PopUpCard from "../Components/HomePages/PopUpCard";

const Home = () => {
  return (
    <div>
      <PopUpCard />
      <TopArea />
      <Popular />
    </div>
  );
};

export default Home;
