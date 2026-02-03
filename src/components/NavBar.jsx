import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <h2>𝄂𝄂—𝄂𝄂 PowerFit</h2>
        </NavLink>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/category/Creatina" onClick={toggleMenu}>
            Creatinas
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Proteina" onClick={toggleMenu}>
            Proteinas
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Pre-entreno" onClick={toggleMenu}>
            Pre-entrenos
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Vitaminas" onClick={toggleMenu}>
            Vitaminas
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/Accesorios" onClick={toggleMenu}>
            Accesorios
          </NavLink>
        </li>
      </ul>

      <div className="cart-widget-container">
        <NavLink to="/cart">
          <CartWidget />
        </NavLink>
      </div>
    </nav>
  );
}
