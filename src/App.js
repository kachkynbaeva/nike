import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Admin from "./Pages/Admin";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
const App = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/admin" element={<Admin/>} />
          </Routes>
        </BrowserRouter>
    );
};

export default App;