import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Roots from "./Pages/Roots";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import LogIn from "./Pages/LogIn";
import PrivetRout from "./Components/PrivetRout";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Roots />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<ErrorPage />} />

            <Route
              path="/home"
              element={
                <PrivetRout>
                  <Home />
                </PrivetRout>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
