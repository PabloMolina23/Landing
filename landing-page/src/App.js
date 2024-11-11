import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/Landing-page/Landing-page";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
      </Routes>
    </Router>
  );
};


export default App;
