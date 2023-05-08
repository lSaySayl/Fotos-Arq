import { Link } from "react-router-dom";

import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar">

    <h1 className="navbar__logo">Foto Arq</h1>

      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to={"/"}>Inicio</Link>
        </li>

        <li className="navbar__li">
          <Link to={"/clientes"}>Clientes</Link>
        </li>

        <li className="navbar__li">
          <Link to={"/estudios"}>Estudios</Link>
        </li>

        <li className="navbar__li">
          <Link to={"/proveedores"}>Proveedores</Link>
        </li>
      </ul>
    </nav>
  );
};
