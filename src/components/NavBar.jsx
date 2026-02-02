import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <h2>𝄂𝄂—𝄂𝄂 PowerFit</h2>
      </NavLink>
      <ul className="navbar-links">
        <li>
          <NavLink to="/category/Creatina">Creatinas</NavLink>
        </li>
        <li>
          <NavLink to="/category/Proteina">Proteinas</NavLink>
        </li>
        <li>
          <NavLink to="/category/Pre-entreno">Pre-entrenos</NavLink>
        </li>
        <li>
          <NavLink to="/category/Vitaminas">Vitaminas</NavLink>
        </li>
        <li>
          <NavLink to="/category/Accesorios">Accesorios</NavLink>
        </li>
      </ul>
      <div className="cart-widget">
        <NavLink to="/cart" style={{ textDecoration: "none", color: "white" }}>
          <CartWidget />
        </NavLink>
      </div>
    </nav>
  );
}
