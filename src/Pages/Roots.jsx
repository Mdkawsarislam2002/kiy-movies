import React from "react";
import { motion } from "framer-motion";

import BannerImg from "../assets/netflixBanner.jpg";
import ImgCollage from "../assets/ImgCollage.jpg";
import RootHero from "../Components/RootsFiles/RootHero";
import PrimaryNav from "../Components/RootsFiles/PrimaryNav";

const Roots = () => {
  return (
    <>
      <div
        className="bg-slate-900 bg-opacity-80"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <PrimaryNav />
        <RootHero />
      </div>
    </>
  );
};

export default Roots;
