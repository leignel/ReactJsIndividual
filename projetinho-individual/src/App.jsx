import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TopMovies from "./pages/TopMovies";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topmovies" element={<TopMovies />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
