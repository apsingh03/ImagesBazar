import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult";
import HomePage2 from "./pages/HomePage2";
import SignupLogin from "./pages/SignupLogin";
import History from "./pages/History";
import AddToFavorite from "./pages/AddToFavorite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signupLogin" element={<SignupLogin />} />
        <Route path="/searchResult/*" element={<SearchResult />} />
        <Route path="/homePage2" element={<HomePage2 />} />
        <Route path="/downloadedImages" element={<History />} />
        <Route path="/favoriteImages" element={<AddToFavorite />} />
      </Routes>
    </>
  );
}

export default App;
