import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 px-6 py-14 lg:px-12">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500/50">
                <div className="h-2 w-2 rounded-full bg-amber-400" />
              </div>
              <span className="text-[15px] font-bold uppercase tracking-widest text-white">
                Cine<span className="text-amber-400">Vault</span>
              </span>
            </div>
            <p className="text-xs leading-6 text-neutral-600">
              Your destination for film reviews, hidden gems, and cinematic deep dives. Built by movie lovers, for movie lovers.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-600 mb-1">
              Explore
            </p>
            {[
              { label: 'Home', to: '/' },
              { label: 'About', to: '/about' },
              { label: 'Reviews', to: '/articles' },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-xs text-neutral-500 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Screening Hours */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-600 mb-1">
              Screening Hours
            </p>
            <p className="text-xs text-neutral-500">Mon – Fri: 12PM – 11PM</p>
            <p className="text-xs text-neutral-500">Sat – Sun: 10AM – 2AM</p>
            <p className="text-xs text-neutral-500">Marathons: Every Last Friday</p>
          </div>

          {/* Now Watching */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-600 mb-1">
              Now Watching
            </p>
            {['Dead Poets Society', 'The Sixth Sense', '13 Going on 30'].map((title) => (
              <p key={title} className="flex items-center gap-2 text-xs text-neutral-500">
                <span className="h-px w-3 bg-amber-400/50" />
                {title}
              </p>
            ))}
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-neutral-800 pt-6 sm:flex-row sm:justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-700">
            Est. 2018
          </p>
          <p className="text-[11px] text-neutral-700">
            © {new Date().getFullYear()} CineVault. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
