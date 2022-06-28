import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import DetailsPage from "./pages/details";
import AboutPage from "./pages/about";
import Header from "./components/header/header";

function App() {
  return(
    <Router>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/details" element={<DetailsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;