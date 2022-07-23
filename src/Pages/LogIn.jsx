import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import KIYLogo from "../Components/KIYLogo";

const LogIn = () => {
  const AuthValue = useAuth();
  // console.log(AuthValue.login);

  const bgImg = `https://th.bing.com/th/id/R.3ac7eb39e8ee61ff9e0e42f2f5792930?rik=MgrZl8Xqwxu1IQ&riu=http%3a%2f%2fpavbca.com%2fwalldb%2foriginal%2fb%2ff%2fd%2f115598.jpg&ehk=ozWg2J94kayjiJXoZi%2fQp0vBTObpRJE4G9n4fC1h7EA%3d&risl=&pid=ImgRaw&r=0`;
  const Navigate = useNavigate();

  const [UserEmail, setUserEmail] = useState("");
  const [userPass, SetUserPass] = useState("");

  const FontHandler = (e) => {
    if (e.target.type == "email") {
      setUserEmail(e.target.value);
    } else if (e.target.type == "password") {
      SetUserPass(e.target.value);
    }
  };
  const FormHandler = async (e) => {
    e.preventDefault();

    try {
      await AuthValue.login(UserEmail, userPass);
      Navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        className="w-screen h-screen  grid place-items-center "
      >
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
                type="password"
                onChange={FontHandler}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-teal-800 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Log In
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            Already Have an Account?
            <Link
              to={"/SignIn"}
              className="font-medium text-gray-700 ml-2 dark:text-gray-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default LogIn;
