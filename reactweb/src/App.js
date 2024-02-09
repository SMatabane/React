
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Items from "./Pages/Items";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/item" exact element={<Items/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
