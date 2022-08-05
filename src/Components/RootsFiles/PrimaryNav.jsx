import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dark, Light } from "../Icon";

import KIYLogo from "../KIYLogo";
import DarkModeToggle from "../DarkModeToggle";

const PrimaryNav = () => {
  const [DarkOrLightMode, setDarkOrLightMode] = useState(true);
  const Navigate = useNavigate();

  return (
    <>
      <nav className="  px-4 flex justify-between py-7 transition-all  hover:bg-slate-800/80  bg-slate-800/70    items-center text-gray-200">
        <KIYLogo />
        <div className="  flex justify-center gap-2    items-center  ">
          <div className="border border-teal-600 rounded-full p-2 ">
            <DarkModeToggle />
          </div>
          {/* sing in button */}
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
          {/* sing in button */}
        </div>
      </nav>
    </>
  );
};

export default PrimaryNav;
