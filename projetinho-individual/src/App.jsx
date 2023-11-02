import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Categorias from "./components/Categorias";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Infos from "./pages/Infos";
import Movies from "./pages/Movies";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Categorias />
      <Contact />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
