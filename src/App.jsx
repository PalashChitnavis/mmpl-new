import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Widget from "./components/Widget";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[20vh] md:h-[8vh]">
        <ContactUs />
      </div>
      <div className="w-full h-[10vh] md:h-[15vh] sticky top-0 shadow-lg">
        <NavBar />
      </div>
      <div className="h-12 w-12  fixed bottom-4 right-4">
        <Widget />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
