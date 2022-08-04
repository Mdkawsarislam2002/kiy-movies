import React from "react";
import ErrorImg from "../assets/Error.svg";

const ErrorPage = () => {
  return (
    <div>
      <img className="w-screen h-screen " src={ErrorImg} alt="Error Img" />
    </div>
  );
};

export default ErrorPage;
