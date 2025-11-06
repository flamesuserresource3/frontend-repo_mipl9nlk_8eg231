import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Prints from "./components/Prints";
import CustomOrder from "./components/CustomOrder";
import About from "./components/About";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="container mx-auto px-6 py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Premium Prints. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="/custom" className="hover:text-white">Get a Quote</a>
          <a href="/about" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-950">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prints" element={<Prints />} />
            <Route path="/custom" element={<CustomOrder />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
