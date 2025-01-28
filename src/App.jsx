import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home"
import About from "./pages/About";
import AllProduct from "./pages/AllProduct";
import Loginpage from "./pages/Loginpage";
import Productpreview from "./pages/Productpreview";
import Carts from "./pages/Carts";
import Save from "./pages/Save";


function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/allproducts" element={<AllProduct />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/allproducts/:id" element={<Productpreview />} />
      <Route path="/carts" element={<Carts/>} />
      <Route path="/save" element={<Save />} />


      </Routes>
      </BrowserRouter>


        
    </div>
  )
}

export default App
