import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido a PowerFit!" />}
          />
          <Route
            path="/category/:categoryID"
            element={<ItemListContainer greeting="Productos seleccionados" />}
          />
          <Route path="/product/:itemID" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <div>
                <h1>404</h1>
                <Link to="/">Volver</Link>
              </div>
            }
          />
        </Routes>
        <ToastContainer theme="dark" />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
