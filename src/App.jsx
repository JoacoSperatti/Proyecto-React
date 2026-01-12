import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
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
            element={
              <ItemListContainer greeting="¡Bienvenido a la mejor tienda de suplementos!" />
            }
          />
          <Route
            path="/category/:categoryID"
            element={<ItemListContainer greeting="Productos filtrados" />}
          />
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

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
