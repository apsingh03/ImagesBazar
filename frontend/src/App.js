import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import SearchResult from "./pages/SearchResult";

import HomePage2 from "./pages/HomePage2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/searchResult" element={<SearchResult />} />

        <Route path="/homePage2" element={<HomePage2 />} />

      
      </Routes>
    </>
  );
}

export default App;
