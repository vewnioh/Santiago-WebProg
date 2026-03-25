import Button from '../components/Button';

const AboutPage = () => {
  // Hobbies data with real image URLs for Enhancement 2 
  const HOBBIES = [
    { 
      label: "Listening to Music", 
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      label: "Watching Movies", 
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      label: "Playing Online Games", 
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400" 
    },
    { 
      label: "Developing Frontend", 
      img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=400" 
    }
  ];

  return (
    // The gap-6 on this parent creates the "double line" effect between sections [cite: 498]
    <div className="flex w-full flex-col gap-6 bg-zinc-100">
      
      {/* --- ABOUT HERO SECTION --- [cite: 257-289] */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            
            {/* Image Container: Cleaned (No dashes) with real placeholder image  */}
            <div className="overflow-hidden rounded-3xl border-2 border-zinc-900 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
                alt="Coding Setup" 
                className="h-full w-full object-cover aspect-video" 
              />
            </div>

            <div className="space-y-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">About Section</p>
              <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                Vergel Adrian G. Santiago: Aspiring Mobile & Web Frontend Developer.
              </h1>
              <p className="max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                I am a 3rd-year BSIT student at National University specializing in Mobile and Web Applications. 
                My journey is focused on mastering the MERN stack and Flutter to build intuitive digital solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/" variant="primary">Back Home</Button>
                <Button to="/articles" variant="secondary">View My Logs</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROFILE OVERVIEW STATS --- [cite: 290-334] */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">Profile Overview</p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Academic & Project Metrics</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">03</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Years in BSIT</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">05</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Active Repos</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">04</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Key Projects</p>
            </div>
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-2xl font-bold text-zinc-900">NU</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">University</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BIO AND HOBBIES SECTION --- [cite: 338-403] */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">Personal Biography</p>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Building for the Future</h2>
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Mission</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  To leverage the MERN stack and Flutter framework in developing modular, scalable, and high-performance applications that enhance user experience through clean code and efficient design.
                </p>
              </article>
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">Experience</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  To become a specialized frontend engineer capable of bridging the gap between complex backend systems and intuitive user-facing interfaces, ensuring accessibility and responsiveness across all platforms.
                </p>
              </article>
            </div>

            {/* Hobbies Section: Uses real images  */}
            <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">My Hobbies</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {HOBBIES.map((hobby, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="aspect-square overflow-hidden rounded-[1.25rem] border-2 border-zinc-300 bg-zinc-200">
                      <img 
                        src={hobby.img} 
                        alt={hobby.label} 
                        className="h-full w-full object-cover grayscale" 
                      />
                    </div>
                    <p className="text-[8px] font-bold uppercase text-zinc-500 text-center tracking-widest">{hobby.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;