import React from "react";

const CustomeHero = () => {
  return (
    <>
      <div
        className="lg:h-[90vh] h-full  p-4 text-gray-100"
        style={{
          backgroundImage: "url(" + BannerImg + ")",
          backgroundSize: "cover",
        }}
      >
        <div className=" bg-gradient-to-tr from-slate-700/30 via-gray-800/50 to-slate-600/30  w-full h-full grid content-center justify-center ">
          <p className="text-xl text-center">Welcome back!</p>
          <h1 className="text-4xl text-center ">
            Unlimited movies, TV shows, and more.
          </h1>
          <h3 className="text-2xl text-center ">
            Watch anywhere. Cancel anytime.
          </h3>
          <button className="btnDanger w-44 mt-4 m-auto inline-block">
            Sing Up
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomeHero;
