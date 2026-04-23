import Button from "../components/Button";
import githubLogo from "../assets/images/githublogo.png";
import linkedinLogo from "../assets/images/lilogo.png";
import gmailLogo from "../assets/images/gmailogo.png";

const STATS = [
  { label: "Project Repositories", value: "08" },
  { label: "Project Collaboration", value: "03" },
  { label: "Live Projects", value: "01" },
  { label: "Frontend Frameworks", value: "06" },
];

const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    handle: "@vewnioh",
    image: githubLogo,
    description: "Check out my repositories where I document my progress in React, Tailwind CSS, and mobile development projects at National University.",
    link: "https://github.com/vewnioh",
  },
  {
    platform: "LinkedIn",
    handle: "Vergel Santiago",
    image: linkedinLogo,
    description: "Let's connect professionally! I share updates regarding my journey as a BSIT student and my latest web application milestones.",
    link: "https://www.linkedin.com/in/vergelsantiago/",
  },
  {
    platform: "Email",
    handle: "Contact Me",
    image: gmailLogo,
    description: "Feel free to reach out for collaboration on school projects, technical inquiries, or discussions regarding modern frontend technologies.",
    link: "mailto:vergelsantiago0509@gmail.com",
  },
];

const HomePage = () => {
  return (
    // The parent div provides the spacing ('gap-6') that creates the double-line effect [cite: 498]
    <div className="flex w-full flex-col gap-6 bg-zinc-100">
      
      {/* --- HERO SECTION --- [cite: 499-531] */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Welcome to my Journey
              </h1>
              <p className="max-w-md text-sm leading-7 text-zinc-600 sm:text-base">
                I'm Vergel Adrian G. Santiago, a 3rd-year BSIT student at National University. 
                I specialize in building clean, intuitive layout systems for modern web and mobile applications.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/about" variant="primary">
                  Learn More
                </Button>
                <Button to="/articles" variant="secondary">
                  Learning Logs
                </Button>
              </div>
            </div>

            {/* Cleaned Image Container - Outlines removed */}
            <div className="overflow-hidden rounded-3xl">
              <div className="aspect-video w-full bg-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Web Development Code" 
                  className="h-full w-full object-cover grayscale" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KPI SECTION --- [cite: 532-579] */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-zinc-900">Quick overview blocks</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <div key={i} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROFESSIONAL DIRECTORY --- [cite: 582-634] */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-zinc-900">Professional Directory</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {SOCIAL_LINKS.map((social, i) => (
              <article key={i} className="flex flex-col rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200 mb-6 overflow-hidden border-2 border-zinc-300">
                  <img
                    src={social.image}
                    alt={social.platform}
                    className="h-24 w-24 object-contain grayscale"
                  />
                </div>
                
                <h3 className="text-lg font-semibold text-zinc-900">{social.platform}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">{social.handle}</p>
                
                <p className="mt-4 grow text-sm leading-6 text-zinc-600 mb-6">
                  {social.description}
                </p>
                
                <Button 
                  to={social.link.startsWith('mailto') ? null : social.link} 
                  variant="primary"
                  className="w-full"
                >
                  {social.platform === "Email" ? "Send Email" : "Visit Profile"}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;