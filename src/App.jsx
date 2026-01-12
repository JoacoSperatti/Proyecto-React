import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <ItemListContainer greeting="¡Bienvenido a la mejor tienda de suplementos!" />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryID" element={<ItemListContainer />} />
        <Route path="/product/:itemID" element={<ItemDetailContainer />} />

        <Route
          path="*"
          element={
            <div>
              <h1>404: Page not found</h1>
              <Link to="/">Regresar al home</Link>
              {/* <a href="/"> */}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
