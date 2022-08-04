import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import RootHero from "../Components/RootsFiles/RootHero";
import PrimaryNav from "../Components/RootsFiles/PrimaryNav";
import imgBanner from "./../assets/imgBanner.jpg";

const Roots = () => {
  let Navigate = useNavigate();
  let AuthValue = useAuth();

  const { currentUser } = AuthValue;
  return (
    <div
      className="bg-slate-900 bg-opacity-80 bg-center bg-cover"
      style={{ backgroundImage: `url(${imgBanner})` }}
    >
      <PrimaryNav />
      <RootHero />
    </div>
  );
};

export default Roots;
