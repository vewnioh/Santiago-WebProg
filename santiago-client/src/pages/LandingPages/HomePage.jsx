import Button from "../../components/Button";

const stats = [
  { value: "1,000+", label: "Films Reviewed" },
  { value: "50+",    label: "Genres Covered" },
  { value: "10K",    label: "Monthly Readers" },
  { value: "100",    label: "Years of Cinema" },
];

const features = [
  {
    label: "Critical Analysis · No Spoilers",
    title: "In-Depth Reviews",
    body: "Every review goes beyond the surface. We examine craft, context, and cultural impact — giving you everything you need to appreciate a film on a deeper level.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
    to: "/articles",
    cta: "Read Reviews",
  },
  {
    label: "Auteur Profiles · Career Deep Dives",
    title: "Director Spotlights",
    body: "From Kubrick to Kurosawa, our director profiles trace the full arc of cinema's greatest visionaries — their influences, obsessions, and lasting legacies.",
    image: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?auto=format&fit=crop&w=600&q=80",
    to: "/about",
    cta: "Learn More",
  },
  {
    label: "Genre · Era · Mood",
    title: "Curated Watchlists",
    body: "Not sure what to watch? Our curated lists sort films by genre, decade, director, and mood — so you always find the right film for the right moment.",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=600&q=80",
    to: "/articles",
    cta: "Explore Lists",
  },
];

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">

      {/* HERO — full-bleed cinematic */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden border-b border-neutral-800">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1400"
          alt="Cinema theater"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Gradient overlay — dark at bottom, lighter at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/20" />

        {/* Content anchored to bottom */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 lg:px-12">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-400">
            Your Cinema Companion
          </p>
          <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Discover Cinema<br />
            <span className="text-neutral-400">Like Never Before.</span>
          </h1>
          <p className="mb-9 max-w-lg text-base leading-7 text-neutral-400">
            CineVault is home to in-depth reviews, essays, and deep dives on the films
            that define world cinema. From classic masterpieces to modern benchmarks —
            every frame matters.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button to="/articles" variant="primary">Browse Reviews</Button>
            <Button to="/about" variant="secondary">About CineVault</Button>
          </div>
        </div>

        {/* Bottom stats strip */}
        <div className="relative z-10 border-t border-neutral-800/60 bg-neutral-950/80 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl grid grid-cols-2 divide-x divide-neutral-800/60 lg:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="px-6 py-5 sm:px-8">
                <p className="text-2xl font-bold text-amber-400">{value}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-neutral-800 bg-neutral-950 px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">What We Offer</p>
            <h2 className="text-2xl font-bold tracking-tight text-white">For the Serious Film Fan</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="group flex flex-col rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-neutral-700 transition-colors duration-300">
                <div className="aspect-[16/9] overflow-hidden bg-neutral-800">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="h-full w-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400">{f.label}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-3 grow text-sm leading-6 text-neutral-500">{f.body}</p>
                  <Button to={f.to} variant="secondary" className="mt-6 self-start">{f.cta}</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
