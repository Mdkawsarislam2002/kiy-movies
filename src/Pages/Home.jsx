import React, { useEffect } from "react";
import HeroCarousel from "../Components/HomePages/HeroCarousel";
import TopArea from "../Components/HomePages/TopArea";
import PerMovie from "../Components/PerMovie";
import API from "../api";

const Home = () => {
  const url = `https://api.themoviedb.org/3/movie/550?api_key=b59349f0c2f8513bb5cbf2003ec8678b`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }, []);

  return (
    <div>
      <TopArea />
      {/* <HeroCarousel /> */}
      {/* <PerMovie /> */}
      <API />
    </div>
  );
};

export default Home;
