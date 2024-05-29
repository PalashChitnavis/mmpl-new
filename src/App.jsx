import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[20vh] md:h-[8vh]">
        <ContactUs />
      </div>
      <div className="w-full h-[15vh]">
        <NavBar className="sticky" />
      </div>
      <div className="w-full h-[55vh] md:h-[67vh] overflow-y-auto ">
        <Home />
      </div>
    </div>
  );
}

export default App;
