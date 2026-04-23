import { Link } from 'react-router-dom';
import Button from '../components/Button';
import deadPoetsSociety from '../assets/images/deadpoetsociety.jpg';
import oblivion from '../assets/images/oblivion.jpg';
import goingOn30 from '../assets/images/13goingon30.jpg';
import theSixthSense from '../assets/images/thesixthsense.jpg';
import theAmazingSpiderMan from '../assets/images/theamazingspider-man.jpg';

const stats = [
  { value: "2018", label: "Year Founded" },
  { value: "1K+",  label: "Films Reviewed" },
  { value: "50+",  label: "Genres Covered" },
  { value: "10K",  label: "Monthly Readers" },
];

const beliefs = [
  {
    number: "01",
    title: "Every Frame Is a Choice",
    body: "Directors don't stumble into greatness. Every angle, every cut, every shadow is a deliberate act of communication. We write about film with the assumption that nothing on screen is accidental — and that understanding those choices is what separates watching from truly seeing.",
  },
  {
    number: "02",
    title: "Context Changes Everything",
    body: "A film doesn't exist in a vacuum. It belongs to a time, a place, a director's body of work, a cultural moment. The best criticism connects the screen to the world around it — illuminating why a film was made, who it was made for, and what it reveals about the era that produced it.",
  },
  {
    number: "03",
    title: "Film Is for Everyone",
    body: "You don't need a degree in film theory to love cinema deeply. CineVault is written for the person who just wants to understand why a film made them feel something — and for the cinephile who already knows the answer but wants to go deeper. Both readers belong here.",
  },
];

const nowScreening = [
  { title: "Dead Poets Society", year: 1989, image: deadPoetsSociety, to: "/articles/dead-poets-society" },
  { title: "Oblivion",           year: 2013, image: oblivion,          to: "/articles/oblivion" },
  { title: "13 Going on 30",     year: 2004, image: goingOn30,         to: "/articles/13-going-on-30" },
  { title: "The Sixth Sense",    year: 1999, image: theSixthSense,     to: "/articles/the-sixth-sense" },
  { title: "The Amazing Spider-Man", year: 2012, image: theAmazingSpiderMan, to: "/articles/the-amazing-spider-man" },
];

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col">

      {/* HERO — full bleed */}
      <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden border-b border-neutral-800">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1400"
          alt="Cinema theater"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-12">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-400">
            About CineVault
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            We Don't Just<br />Watch Films.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-400">
            We live inside them — frame by frame, cut by cut, until the credits roll and the lights come back on
            and the world looks slightly different than it did before.
          </p>
        </div>
      </section>

      {/* ORIGIN / MANIFESTO */}
      <section className="border-b border-neutral-800 bg-neutral-950 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">

          {/* Pull quote */}
          <div className="lg:sticky lg:top-28">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-600 mb-6">Our Story</p>
            <blockquote className="text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
              "Cinema is a mirror by which we often see ourselves."
            </blockquote>
            <p className="mt-4 text-sm text-neutral-600">— Martin Scorsese</p>
            <div className="mt-8 h-px w-12 bg-amber-400/50" />
          </div>

          {/* Narrative */}
          <div className="space-y-6">
            <p className="text-[15px] leading-8 text-neutral-400">
              CineVault was founded in 2018 by a small group of writers who shared a single conviction:
              that film criticism had drifted too far from the people it was supposed to serve. Too academic
              to be readable. Too breezy to be useful. Too focused on scores and rankings to say anything
              true about what a film actually does to a person in a dark room.
            </p>
            <p className="text-[15px] leading-8 text-neutral-400">
              We set out to write differently — with rigor and warmth in equal measure. To treat directors
              as artists, performances as craft, and audiences as intelligent people who don't need to be
              talked down to. Every review published on CineVault is written with the belief that film is
              one of the most powerful art forms humanity has ever produced, and that it deserves prose that
              rises to meet it.
            </p>
            <p className="text-[15px] leading-8 text-neutral-400">
              From Robin Williams standing on a desk demanding his students seize the day, to a small boy
              whispering a secret that changes everything — the films we write about are the ones that stay
              with you. The ones that make the drive home feel different. The ones you find yourself quoting
              years later without quite knowing why.
            </p>
            <div className="pt-2">
              <Button to="/articles" variant="primary">Read Our Reviews</Button>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-neutral-800 bg-neutral-900 px-6 py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px bg-neutral-800 rounded-xl overflow-hidden lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-neutral-900 px-8 py-8">
                <p className="text-3xl font-bold text-amber-400">{value}</p>
                <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="border-b border-neutral-800 bg-neutral-950 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500 mb-3">What We Believe</p>
            <h2 className="text-2xl font-bold tracking-tight text-white">The CineVault Principles</h2>
          </div>

          <div className="flex flex-col divide-y divide-neutral-800">
            {beliefs.map((b) => (
              <div key={b.number} className="group grid gap-6 py-10 lg:grid-cols-[120px_1fr_2fr] lg:items-start">
                <p className="text-4xl font-bold text-neutral-800 group-hover:text-amber-400/30 transition-colors duration-300 tabular-nums">
                  {b.number}
                </p>
                <h3 className="text-lg font-semibold text-white lg:pt-1">{b.title}</h3>
                <p className="text-[15px] leading-8 text-neutral-500">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOW SCREENING */}
      <section className="border-b border-neutral-800 bg-neutral-900 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-baseline justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500 mb-2">In the Vault</p>
              <h2 className="text-2xl font-bold tracking-tight text-white">Now Screening</h2>
            </div>
            <Link
              to="/articles"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 hover:text-amber-400 transition-colors"
            >
              All Reviews →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {nowScreening.map((film) => (
              <Link
                key={film.title}
                to={film.to}
                className="group flex flex-col gap-3"
              >
                <div className="aspect-[2/3] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800 group-hover:border-neutral-600 transition-colors duration-300">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-snug group-hover:text-amber-400 transition-colors duration-200">
                    {film.title}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">{film.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
