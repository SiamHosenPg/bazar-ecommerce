import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AllProduct from "./pages/AllProduct";
import Loginpage from "./pages/Loginpage";
import Productpreview from "./pages/Productpreview";
import Carts from "./pages/Carts";
import Save from "./pages/Save";
import Shoepage from "./pages/Shoepage";
import Watchproduct from "./pages/Watchproduct";
import Dressproduct from "./pages/Dressproduct";
import ScrollToTop from "./components/Scrolltotop";
import Headphoneproduct from "./pages/Headphoneproduct";
import Faceproduct from "./pages/Faceproduct";
import { useState } from "react";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";

function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (ProductInfo) => {
    if (cart.includes(ProductInfo)) {
      alert("The product in the cart");
      return;
    }
    setCart([...cart, ProductInfo]);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allproducts" element={<AllProduct />} />
        <Route path="/login" element={<Loginpage />} />
        <Route
          path="/allproducts/:id"
          element={<Productpreview addToCart={addToCart} />}
        />
        <Route
          path="/carts"
          element={<Carts cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/save" element={<Save />} />
        <Route path="/shoe" element={<Shoepage />} />
        <Route path="/watch" element={<Watchproduct />} />
        <Route path="/dress" element={<Dressproduct />} />
        <Route path="/headphones" element={<Headphoneproduct />} />
        <Route path="/faceproduct" element={<Faceproduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
