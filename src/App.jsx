import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import Header from "./homepage/Header";
import Beginner from "./homepage/Beginner";
import Intermediate from "./homepage/Intermediate";
import Expert from "./homepage/Expert";
import ResultPage from "./homepage/ResultPage";
import Contact from "./homepage/Contact";
import About from "./homepage/About";
import Theme from "./homepage/Theme";
import QuizPage from "./homepage/QuizPage";
import Login from "./login/Login";
import Signup from "./login/Signup";
import ForgotPassword from "./login/ForgotPassword";


// ✅ Header controller
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {!hideHeader && <Header />}
      {children}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* ✅ DEFAULT PAGE = LOGIN */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* ✅ AFTER LOGIN PAGES */}
          <Route path="/beginner" element={<Beginner />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/expert" element={<Expert />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/theme" element={<Theme />} />
          <Route path="/quiz/:topic" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />

          {/* ❌ Unknown route → Login */}
          <Route path="*" element={<Navigate to="/Beginner" />} />
          <Route path="*" element={<Navigate to="/Intermediate" />} />
          <Route path="*" element={<Navigate to="/Expert" />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
