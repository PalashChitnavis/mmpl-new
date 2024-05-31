import ContactUs from "./components/ContactUs";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Widget from "./components/Widget";
function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[20vh] md:h-[8vh]">
        <ContactUs />
      </div>
      <div className="w-full h-[10vh] md:h-[15vh] sticky top-0">
        <NavBar />
      </div>
      <div className="w-full h-[55vh] md:h-[67vh]">
        <Home />
      </div>
      <div className="h-10 w-10 md:w-12 md:h-12 fixed bottom-5 right-5">
        <Widget />
      </div>
    </div>
  );
}

export default App;
