import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
// import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
