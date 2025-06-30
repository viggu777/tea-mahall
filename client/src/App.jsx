import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login/*" element={<AdminLogin />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
