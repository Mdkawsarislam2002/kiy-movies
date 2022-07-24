import React from "react";
import LoaderImg from "../assets/TheLoader.svg";

const Loader = () => {
  return (
    <div className="w-screen z-10 h-screen absolute backdrop-blur-sm bg-white/30  top-0 left-0  grid place-items-center">
      <div className=" w-4/6 h-4/6 ">
        <img className="m-auto" src={LoaderImg} alt="Loading" />
      </div>
    </div>
  );
};

export default Loader;
