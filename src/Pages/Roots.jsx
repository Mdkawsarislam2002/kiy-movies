import React from "react";
import BannerImg from "../assets/netflixBanner.jpg";
import RootHero from "../Components/RootsFiles/RootHero";
import PrimaryNav from "../Components/RootsFiles/PrimaryNav";

const Roots = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${BannerImg})` }}>
        <PrimaryNav />
        <RootHero />
      </div>
    </>
  );
};

export default Roots;
