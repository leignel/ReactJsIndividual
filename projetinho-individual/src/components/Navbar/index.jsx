import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../img/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="navbar">
      <img className="imglogo" src={logo} alt="Logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" to="/">
          Home
        </Link>
        <Link className="desktopMenuListItem" to="/topmovies">
          Top Filmes
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
