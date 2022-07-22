import React from "react";
import MovieIcon from "../../assets/movie_icon.svg";

const PrimaryNav = () => {
  return (
    <>
      <nav className="  px-4 flex justify-between py-7 transition-all  hover:bg-slate-800/80  bg-slate-800/70    items-center text-gray-200">
        <div className="font-bold flex items-center text-sm font-serif">
          <span>
            <img className="w-8 mx-2" src={MovieIcon} alt="Movie Logo " />
          </span>
          <span className="text-2xl text-red-600">KIY</span>Movies
        </div>
        <div className="menu">
          <button type="button" className="btnDanger">
            Sing In
          </button>
        </div>
      </nav>
    </>
  );
};

export default PrimaryNav;
