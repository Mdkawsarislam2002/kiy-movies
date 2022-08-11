import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import KIYLogo from "../Components/KIYLogo";
import Loader from "../Components/Loader";

const SignIn = () => {
  const AuthValue = useAuth();
  // console.log(AuthValue.signup);

  const bgImg = `https://th.bing.com/th/id/R.3ac7eb39e8ee61ff9e0e42f2f5792930?rik=MgrZl8Xqwxu1IQ&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2fb%2ff%2fd%2f115598.jpg&ehk=ozWg2J94kayjiJXoZi%2fQp0vBTObpRJE4G9n4fC1h7EA%3d&risl=&pid=ImgRaw&r=0`;
  const Navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [UserEmail, setUserEmail] = useState("");
  const [userPass, SetUserPass] = useState("");
  const [error, setError] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [IsError, setIsError] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const FontHandler = (e) => {
    if (e.target.type == "text") {
      setUserName(e.target.value);
    } else if (e.target.type == "email") {
      setUserEmail(e.target.value);
    } else if (e.target.type == "password") {
      SetUserPass(e.target.value);
    }
  };

  const FormSubmit = async (e) => {
    setIsDisable(true);
    setIsLoading(true);

    try {
      e.preventDefault();
      await AuthValue.signup(UserEmail, userPass, userName);
      setIsDisable(false);
      Navigate("/home");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      setIsError(true);
      setIsDisable(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="w-screen h-screen overflow-hidden bg-gray-100 dark:bg-slate-900  grid place-items-center "
        onClick={(e) => {
          setIsError(false);
        }}
      >
        {IsLoading ? <Loader /> : ""}
        <div className="w-full max-w-sm  p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800">
          <div
            className="cursor-pointer"
            onClick={() => {
              Navigate("/");
            }}
          >
            <KIYLogo />
          </div>
          {/* PRINT ERROR   END  */}
          <motion.div
            initial={{
              x: "-100vw",
            }}
            animate={{
              x: IsError ? 0 : "-100vw",
            }}
            className="flex absolute top-1 right-0 w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
          >
            <div className="flex items-center justify-center w-12 bg-red-500">
              <svg
                className="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div className="px-4 py-2 -mx-3">
              <div className="mx-3">
                <span className="font-semibold text-red-500 dark:text-red-400">
                  Error
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                  {error}
                </p>
              </div>
            </div>
          </motion.div>
          {/* PRINT ERROR   END */}

          <center>
            <h2 className="my-4 text-xl font-bold text-slate-600 ">
              Create A New Account
            </h2>
          </center>

          <form className="mt-6" onSubmit={FormSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                User Name
              </label>
              <input
                required
                onChange={FontHandler}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Email
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
                onChange={FontHandler}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                disabled={isDisable}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-teal-800 focus:outline-none focus:bg-gray-600"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            Already Have an Account?
            <Link
              to={"/login"}
              className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default SignIn;
