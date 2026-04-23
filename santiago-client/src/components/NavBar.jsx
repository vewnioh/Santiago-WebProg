import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Reviews", to: "/articles" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "py-1 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200",
    isActive ? "text-amber-400" : "text-neutral-500 hover:text-neutral-200",
  ].join(" ");

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-neutral-800 bg-neutral-950/98 backdrop-blur-md py-3 shadow-[0_1px_24px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-neutral-950/70 backdrop-blur-sm py-4",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">

        <NavLink to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500/60">
            <div className="h-2 w-2 rounded-full bg-amber-400" />
          </div>
          <span className={[
            "font-bold uppercase tracking-widest text-white transition-all duration-300",
            scrolled ? "text-[13px]" : "text-[15px]",
          ].join(" ")}>
            Cine<span className="text-amber-400">Vault</span>
          </span>
        </NavLink>

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
