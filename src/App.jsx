import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Footer from "./components/Footer";

import "./server";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-svh min-w-full flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
