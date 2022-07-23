import React from "react";
import MovieIcon from "../assets/movie_icon.svg";
const KIYLogo = () => {
  return (
    <div>
      <div className="font-bold flex items-center text-sm font-serif">
        <span>
          <img className="w-8 mx-2" src={MovieIcon} alt="Movie Logo " />
        </span>
        <span className="text-2xl text-red-600">KIY</span>Movies
      </div>
    </div>
  );
};

export default KIYLogo;
