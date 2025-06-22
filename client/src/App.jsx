import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";
import Birthday from "./pages/Birthday";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Birthday page without navbar/footer */}
          <Route path="/birthday" element={<Birthday />} />

          {/* All other pages with navbar/footer */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <div className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/franchise" element={<Franchise />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                  </Routes>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
