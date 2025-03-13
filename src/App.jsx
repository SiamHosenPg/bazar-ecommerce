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
import { useEffect, useState } from "react";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";
import { ProductDataProvider } from "./assets/contextapi/ContextApp";
import { CartProvider } from "./assets/contextapi/Cartcontext";
import Dialoguebox from "./components/common/dialoguebox/Dialoguebox";
import { DialogueProvider } from "./assets/contextapi/Dialoguecontext";
import Notfound from "./pages/Notfound";
import { SearchProvider } from "./assets/contextapi/Searchcontext";
import Searchresult from "./pages/Searchresult";

function App() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 সেকেন্ড পর লোডিং বন্ধ হবে
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);
  // Add product to cart

  return (
    <ProductDataProvider>
      <DialogueProvider>
        <CartProvider>
          <SearchProvider>
            {loading ? (
              // লোডিং স্পিনার দেখাবে
              <div className="flex justify-center items-center h-screen">
                <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
              </div>
            ) : (
              // ওয়েবসাইটের মেইন কন্টেন্ট

              <Router>
                <Routes>
                  <Route path="/login" element={<Loginpage />} />
                  <Route
                    path="/*"
                    element={
                      <>
                        <ScrollToTop />
                        <Nav />
                        <Dialoguebox />
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/home" element={<Home />} />
                          <Route path="*" element={<Notfound />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/allproducts" element={<AllProduct />} />
                          <Route path="/login" element={<Loginpage />} />
                          <Route
                            path="/allproducts/:id"
                            element={<Productpreview />}
                          />
                          <Route path="/carts" element={<Carts />} />
                          <Route path="/save" element={<Save />} />
                          <Route path="/shoe" element={<Shoepage />} />
                          <Route path="/results" element={<Searchresult />} />
                          <Route path="/watch" element={<Watchproduct />} />
                          <Route path="/dress" element={<Dressproduct />} />
                          <Route
                            path="/headphones"
                            element={<Headphoneproduct />}
                          />
                          <Route
                            path="/faceproduct"
                            element={<Faceproduct />}
                          />
                        </Routes>
                        <Footer />
                      </>
                    }
                  />
                </Routes>
              </Router>
            )}
          </SearchProvider>
        </CartProvider>
      </DialogueProvider>
    </ProductDataProvider>
  );
}

export default App;
