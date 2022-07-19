import React from "react";

const PrimaryNav = () => {
  return (
    <>
      <nav className="  px-4 flex justify-between py-7  bg-slate-800  items-center text-gray-200">
        <div className="font-bold text-sm font-serif">Awesome Movies</div>
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
