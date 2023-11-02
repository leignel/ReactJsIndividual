import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="imglogo" src={logo} alt="Logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem" to="/">
          Home
        </Link>
        <Link className="desktopMenuListItem" to="/infos">
          Informações
        </Link>
        <Link className="desktopMenuListItem" to="/movies">
          Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
