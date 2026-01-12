import CartWidget from "./CartWidget";
import { NavLink } from "react-router"; 
export default function NavBar() {
  return (
    <nav className="navbar">
      
      <NavLink to="/">
        <h2>𝄂𝄂—𝄂𝄂 PowerFit</h2>
      </NavLink>

      <ul className="navbar-links">
        <li><NavLink to="/category/Creatinas">Creatinas</NavLink></li>
        <li><NavLink to="/category/Proteinas">Proteinas</NavLink></li>
      </ul>

      <div className="cart-widget">
         <CartWidget />
      </div>

    </nav>
  );
}