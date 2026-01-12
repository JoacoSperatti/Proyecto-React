import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router"; 
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a la mejor tienda de suplementos!" />} />
          <Route path="/category/:categoryID" element={<ItemListContainer greeting="Productos filtrados" />} />
          <Route path="/product/:itemID" element={<ItemDetailContainer />} />

          <Route
            path="*"
            element={
              <div>
                <h1>404: Page not found</h1>
                <Link to="/">Regresar al home</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;