import React from "react";
import BannerImg from "../../assets/netflixBanner.jpg";

const MerakiNav = () => {
  const Showimg = `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80`;

  return (
    <>
      <header>
        <div
          style={{ backgroundImage: `url(${BannerImg})` }}
          className="w-full bg-center bg-cover lg:h-[90vh] h-screen "
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
                Watch Awesome
                <span className="text-blue-400 underline mx-2">Movies</span>
                Free
              </h1>
              <button className="btnDanger  mt-8  ">Log In</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MerakiNav;
