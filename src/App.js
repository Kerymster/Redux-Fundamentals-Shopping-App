import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./components/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductsList />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails />}
          />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
