import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import ContactUs from "./pages/contact";
import UserInfoForm from "./components/userInfoForm";
import Questionnaire from "./components/questionnaire";
import PDFGeneration from "./components/PDFGeneration";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [answers, setAnswers] = useState({ total: 0 });

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/pdf"
          element={<PDFGeneration userInfo={userInfo} answers={answers} />}
        />
        <Route
          path="/questionnaire"
          element={
            userInfo ? (
              <Questionnaire userInfo={userInfo} setAnswers={setAnswers} />
            ) : (
              <UserInfoForm onSubmit={setUserInfo} />
            )
          }
        />
        {/* <Route
          path="/pdf"
          element={
            userInfo ? (
              <PDFGeneration userInfo={userInfo} answers={answers} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
