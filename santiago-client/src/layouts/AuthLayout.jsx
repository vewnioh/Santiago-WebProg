import { Outlet, NavLink } from 'react-router-dom';
import deadPoetsSociety from '../assets/images/dpsportrait.jpg';
import martian from '../assets/images/martian.jpg';
import goingOn30 from '../assets/images/13go30portrait.jpg';
import theSixthSense from '../assets/images/tssportrait.jpg';
import theAmazingSpiderMan from '../assets/images/tasmportrait.jpg';

const reel = [
  { src: deadPoetsSociety,    title: 'Dead Poets Society',     code: 'REEL 01 · 1989' },
  { src: martian,              title: 'The Martian',             code: 'REEL 02 · 2015' },
  { src: goingOn30,            title: '13 Going on 30',          code: 'REEL 03 · 2004' },
  { src: theSixthSense,        title: 'The Sixth Sense',         code: 'REEL 04 · 1999' },
  { src: theAmazingSpiderMan,  title: 'The Amazing Spider-Man',  code: 'REEL 05 · 2012' },
];

const SprocketColumn = ({ side }) => (
  <div
    className={[
      'absolute top-0 bottom-0 z-20 w-9 overflow-hidden bg-neutral-950',
      side === 'left' ? 'left-0 border-r border-neutral-900' : 'right-0 border-l border-neutral-900',
    ].join(' ')}
  >
    <div className="animate-filmscroll flex flex-col gap-4 py-6">
      {Array.from({ length: 80 }).map((_, i) => (
        <div key={i} className="mx-auto h-3 w-4 shrink-0 rounded-sm bg-neutral-800/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]" />
      ))}
    </div>
  </div>
);

const AuthLayout = () => (
  <div className="min-h-screen bg-neutral-950 text-white">
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">

      {/* LEFT — cinematic film strip */}
      <aside className="relative hidden lg:flex lg:flex-col overflow-hidden border-r border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-950 to-black">

        {/* Top header bar */}
        <div className="relative z-30 flex items-center justify-between border-b border-neutral-900 bg-neutral-950/90 px-10 py-6 backdrop-blur-sm">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-amber-500/50">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400 animate-bulb-flicker" />
            </div>
            <span className="text-[15px] font-bold uppercase tracking-[0.28em] text-white">
              Cine<span className="text-amber-400">Vault</span>
            </span>
          </NavLink>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-neutral-500">
              Projection Room · Live
            </p>
          </div>
        </div>

        {/* Film strip stage */}
        <div className="relative flex-1 overflow-hidden">

          <SprocketColumn side="left" />
          <SprocketColumn side="right" />

          {/* Poster reel */}
          <div className="absolute inset-0 px-12 overflow-hidden">
            <div className="animate-filmscroll flex flex-col gap-8 py-10">
              {[...reel, ...reel].map((p, i) => (
                <figure key={i} className="relative shrink-0">
                  <div className="aspect-[2/3] overflow-hidden rounded-sm border border-neutral-800/80 bg-neutral-900 shadow-[0_0_30px_rgba(0,0,0,0.9)]">
                    <img
                      src={p.src}
                      alt={p.title}
                      className="h-full w-full object-cover opacity-80 saturate-75 contrast-110"
                    />
                    {/* Frame tint */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-400/5 via-transparent to-amber-900/20" />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between px-0.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">{p.code}</span>
                    <span className="font-mono text-[10px] tracking-widest text-amber-400/70">◉ {String(i + 1).padStart(2, '0')}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Gradient masks for top/bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />

          {/* Center viewer line — like a projector slit */}
          <div className="pointer-events-none absolute left-9 right-9 top-1/2 z-10 -translate-y-1/2">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
            <div className="mt-px h-px bg-gradient-to-r from-transparent via-amber-400/10 to-transparent" />
          </div>

          {/* Grain overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.08]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)',
              backgroundSize: '3px 3px',
              mixBlendMode: 'overlay',
            }}
          />
        </div>

        {/* Bottom ticker */}
        <div className="relative z-30 overflow-hidden border-t border-neutral-900 bg-neutral-950/95 py-3">
          <div className="flex w-max animate-ticker whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, outer) => (
              <div key={outer} className="flex shrink-0 items-center gap-10 px-10">
                {reel.map((p) => (
                  <span key={`${outer}-${p.title}`} className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                    <span className="h-1 w-1 rounded-full bg-amber-400" />
                    Now Screening · {p.title}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

      </aside>

      {/* RIGHT — form outlet */}
      <section className="relative flex flex-col bg-neutral-950">

        {/* Ambient backlight */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-amber-600/5 blur-[100px]" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
          {/* Mobile brand */}
          <NavLink to="/" className="flex items-center gap-2.5 lg:hidden">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-500/50">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
            </div>
            <span className="text-[14px] font-bold uppercase tracking-[0.25em] text-white">
              Cine<span className="text-amber-400">Vault</span>
            </span>
          </NavLink>

          <NavLink
            to="/"
            className="ml-auto font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition-colors hover:text-amber-400"
          >
            ← Back to Lobby
          </NavLink>
        </div>

        {/* Form area */}
        <div className="relative z-10 flex flex-1 items-center justify-center px-6 pb-16 sm:px-10 lg:px-14">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        {/* Bottom legal strip */}
        <div className="relative z-10 border-t border-neutral-900 bg-neutral-950/80 px-6 py-4 sm:px-10 lg:px-14">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">
            Est. 2018 · CineVault Projection Co.
          </p>
        </div>
      </section>
    </div>
  </div>
);

export default AuthLayout;
