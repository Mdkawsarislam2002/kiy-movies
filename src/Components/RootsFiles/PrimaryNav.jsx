import React from "react";
import { useNavigate } from "react-router-dom";

import KIYLogo from "../KIYLogo";

const PrimaryNav = () => {
  const Navigate = useNavigate();

  return (
    <>
      <nav className="  px-4 flex justify-between py-7 transition-all  hover:bg-slate-800/80  bg-slate-800/70    items-center text-gray-200">
        <KIYLogo />
        <div className="menu">
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
      </nav>
    </>
  );
};

export default PrimaryNav;
