import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dark, Light } from "../Icon";

import KIYLogo from "../KIYLogo";

const PrimaryNav = () => {
  const [DarkOrLightMode, setDarkOrLightMode] = useState(true);
  const Navigate = useNavigate();

  return (
    <>
      <nav className="  px-4 flex justify-between py-7 transition-all  hover:bg-slate-800/80  bg-slate-800/70    items-center text-gray-200">
        <KIYLogo />
        <div className="menu flex  items-center  ">
          <div
            className="mx-2 md:mx-4 border border-teal-700 rounded-full p-2 cursor-pointer "
            onClick={(e) => {
              setDarkOrLightMode((DarkOrLightMode) => !DarkOrLightMode);
            }}
          >
            <div> {DarkOrLightMode ? <Dark /> : <Light />} </div>
          </div>
          <div>
            <button
              onClick={() => {
                Navigate("/SignIn");
              }}
              type="button"
              className="btnDanger"
            >
              Sing In
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PrimaryNav;
