import { NavLink } from "react-router-dom";
import Logo from "../assets/images/vslogo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" }, // Fixed: Plural to match your routes
];

// 1. UPDATED LINK STYLING
// Using a bottom-border indicator instead of a pill for a "different" look 
const navLinkClassName = ({ isActive }) =>
  [
    "relative py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-200",
    isActive
      ? "text-zinc-900 after:absolute after:bottom-[-18px] after:left-0 after:h-[4px] after:w-full after:bg-yellow-500"
      : "text-zinc-400 hover:text-zinc-900",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b-2 border-zinc-900 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        
        {/* 2. LOGO SECTION - FIXED RESPONSIVENESS [cite: 230-234, 665] */}
        <NavLink to="/" className="flex items-center transition-transform active:scale-95">
          <img 
            src={Logo} 
            alt="Vergel Santiago Logo" 
            className="h-8 w-auto object-contain md:h-10" // h-auto prevents the stretching seen in your screenshot
          />
        </NavLink>

        {/* 3. NAVIGATION LINKS [cite: 235-242] */}
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default NavBar;