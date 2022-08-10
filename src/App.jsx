import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Roots from "./Pages/Roots";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import LogIn from "./Pages/LogIn";
import PrivetRout from "./Components/PrivetRout";
import ErrorPage from "./Pages/ErrorPage";
import GetDetails from "./Components/MovieDetails/GetDetails";
import { ThemeProvider } from "next-themes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider attribute="class">
            <Routes>
              <Route path="/" element={<Roots />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/*" element={<ErrorPage />} />
              <Route
                path="/home"
                element={
                  <PrivetRout>
                    <Home />
                  </PrivetRout>
                }
              />
              <Route path="/home/movie" element={<GetDetails />} />
            </Routes>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
