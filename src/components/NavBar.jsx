import CartWidget from "./CartWidget";
import { NavLink } from "react-router"; // O 'react-router-dom' según tu versión

export default function NavBar() {
  return (
    <nav className="navbar">
      
      {/* Al hacer clic aquí vas a "/", donde ItemListContainer no recibe categoryID 
          y por ende muestra TODOS los productos (lógica ya implementada). */}
      <NavLink to="/">
        <h2>𝄂𝄂—𝄂𝄂 PowerFit</h2>
      </NavLink>

      <ul className="navbar-links">
        {/* CORRECCIÓN: Usamos "Creatina" y "Proteina" (singular) en el 'to' 
            para que coincida exactamente con lo que dice en products.js */}
        <li><NavLink to="/category/Creatina">Creatinas</NavLink></li>
        <li><NavLink to="/category/Proteina">Proteinas</NavLink></li>
      </ul>

      <div className="cart-widget">
         <CartWidget />
      </div>

    </nav>
  );
}