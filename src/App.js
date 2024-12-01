import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projects" element={<Projects />} />          
          <Route exact path="/About" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
