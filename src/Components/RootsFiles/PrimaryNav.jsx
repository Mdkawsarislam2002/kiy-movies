import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";

import KIYLogo from "../KIYLogo";
import DarkModeToggle from "../DarkModeToggle";

const PrimaryNav = () => {
  const Navigate = useNavigate();

  const { theme, setTheme } = useTheme();
  const DarkModeHandler = () => {
    console.log(theme);
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <>
      <nav className="  px-4 flex justify-between py-7 transition-all  hover:bg-slate-800/80  bg-slate-800/70    items-center text-gray-200">
        <div>
          <KIYLogo />
        </div>
        <div className="  flex justify-center gap-2    items-center  ">
          <div
            onClick={DarkModeHandler}
            className="border border-teal-600 rounded-full p-2 "
          >
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
