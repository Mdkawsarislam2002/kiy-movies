import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Roots from "./Pages/Roots";
import Home from "./Pages/Home";
import PrivetsRout from "./Components/PrivetsRout";
import SignIn from "./Pages/SignIn";
import LogIn from "./Pages/LogIn";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Roots />} />
            <Route path="/home" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
