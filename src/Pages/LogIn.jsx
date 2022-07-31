import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "../Components/Loader";

import KIYLogo from "../Components/KIYLogo";

const LogIn = () => {
  const AuthValue = useAuth();
  // console.log(AuthValue);

  const bgImg = `https://th.bing.com/th/id/R.3ac7eb39e8ee61ff9e0e42f2f5792930?rik=MgrZl8Xqwxu1IQ&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2fb%2ff%2fd%2f115598.jpg&ehk=ozWg2J94kayjiJXoZi%2fQp0vBTObpRJE4G9n4fC1h7EA%3d&risl=&pid=ImgRaw&r=0`;
  const Navigate = useNavigate();

  const [UserEmail, setUserEmail] = useState("");
  const [userPass, SetUserPass] = useState("");
  const [IsError, setIsError] = useState(false);
  const [TheError, setTheError] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const FontHandler = (e) => {
    if (e.target.type == "email") {
      setUserEmail(e.target.value);
    } else if (e.target.type == "password") {
      SetUserPass(e.target.value);
    }
  };
  const FormHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await AuthValue.login(UserEmail, userPass);
      Navigate("/home");
      setIsLoading(false);
    } catch (error) {
      setTheError(error.message);
      setIsError(true);
      setIsLoading(false);
    }
  };
  return (
    <>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        className="w-screen h-screen  grid place-items-center  bg-gray-100 dark:bg-slate-900"
      >
        {IsLoading ? <Loader /> : ""}
        {/* print error start  */}

        <motion.div
          initial={{ y: "-100vw" }}
          animate={{ y: IsError ? 0 : "-100vw" }}
          className="w-full text-white bg-red-500 absolute top-0 left-0 "
        >
          <div className="container flex items-center justify-between px-6 py-4 mx-auto">
            <div className="flex">
              <svg viewBox="0 0 40 40" className="w-6 h-6 fill-current">
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path>
              </svg>

              <p className="mx-3">{TheError}</p>
            </div>

            <button
              onClick={(e) => {
                setIsError(false);
              }}
              className="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>
        {/* print error end */}

        <div className="w-full max-w-sm  p-6 m-auto  bg-white rounded-md shadow-lg dark:bg-gray-800">
          <div
            className="cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            <KIYLogo />
          </div>

          <form onSubmit={FormHandler} className="mt-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                email
              </label>
              <input
                required
                onChange={FontHandler}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Password
                </label>
              </div>

              <input
                required
                type="password"
                onChange={FontHandler}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full z-0 px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-teal-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Log In
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            Don't Have Any Account
            <Link
              to={"/SignIn"}
              className="font-medium text-gray-700 ml-2 dark:text-gray-200 hover:underline"
            >
              Create One
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default LogIn;
