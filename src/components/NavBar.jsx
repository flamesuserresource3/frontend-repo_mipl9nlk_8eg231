import { Link, NavLink } from "react-router-dom";
import { Cube, ShoppingBag, GalleryHorizontalEnd, FileSignature, Info } from "lucide-react";

export default function NavBar() {
  const linkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 px-3 py-2 rounded-lg transition ${
      isActive ? "bg-white/15 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-white">
          <Cube className="h-6 w-6 text-cyan-300" />
          <span className="font-extrabold tracking-tight">Premium Prints</span>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/" className={linkClass} end>
            <ShoppingBag className="h-4 w-4" /> Home
          </NavLink>
          <NavLink to="/prints" className={linkClass}>
            <GalleryHorizontalEnd className="h-4 w-4" /> Our Prints
          </NavLink>
          <NavLink to="/custom" className={linkClass}>
            <FileSignature className="h-4 w-4" /> Custom Orders
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            <Info className="h-4 w-4" /> About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
