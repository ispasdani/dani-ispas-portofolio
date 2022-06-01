import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portofolio from "./components/Portofolio/Portofolio";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Home />
      <About />
      <Portofolio />
      <Contact />
    </div>
  );
}

export default App;
