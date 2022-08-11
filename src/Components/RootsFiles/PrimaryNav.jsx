import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";

import KIYLogo from "../KIYLogo";
import DarkModeToggle from "../DarkModeToggle";

const PrimaryNav = () => {
  const Navigate = useNavigate();

  const { theme, setTheme } = useTheme();
  console.log(theme);
  const DarkModeHandler = (e) => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      <nav className="  px-4 flex justify-between py-7 transition-all  hover:bg-slate-800/80 dark:bg-slate-900 bg-slate-800/70    items-center text-gray-200">
        <div>
          <KIYLogo />
        </div>
        <div className="  flex justify-center gap-2    items-center  ">
          <div
            onClick={DarkModeHandler}
            className=" mx-2 md:mx-4  rounded-full p-2 relative top-0 left-0 cursor-pointer"
          >
            <DarkModeToggle theme={theme} />
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
