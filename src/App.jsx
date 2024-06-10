import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Widget from "./components/Widget";
import Footer from "./components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Enquiry from "./components/Enquiry";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full h-full">
      <ToastContainer />
      <div className="w-full h-[20vh] md:h-[8vh]">
        <ContactUs />
      </div>
      <div className="w-full h-[10vh] md:h-[15vh] sticky top-0 shadow-lg">
        <NavBar />
      </div>
      <div className="h-12 w-12  fixed bottom-4 right-4">
        <Widget />
      </div>
      <div className="h-12 w-12 fixed top-[50%] right-0">
        <Enquiry />
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
