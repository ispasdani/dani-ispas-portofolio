import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Portofolio from "./components/Portofolio/Portofolio";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portofolio />
      <Contact />
    </div>
  );
}

export default App;
