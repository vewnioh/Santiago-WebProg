import Button from '../components/Button';

const ArticlePage = () => {
  const myArticles = [
    {
      id: "01",
      title: "TodaGo: AI Tricycle Dispatching",
      desc: "An exploration of how I built an AI-powered platform to streamline tricycle dispatching for my capstone project."
    },
    {
      id: "02",
      title: "React Attendance Tracking",
      desc: "A technical write-up on creating a modular student attendance tracker using React.js and modern state management."
    },
    {
      id: "03",
      title: "The MERN Stack Journey",
      desc: "Sharing my experience designing modular web applications using MongoDB, Express, React, and Node.js."
    },
    {
      id: "04",
      title: "Flutter for Mobile Design",
      desc: "Discussing the UI/UX principles I applied while developing a mobile app with the Flutter framework."
    }
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      {/* Featured Header */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Learning Logs</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          DevLogs & Project Deep Dives
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          This section documents my technical progress as a BSIT student, covering everything from capstone updates to web frameworks.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      {/* Article Grid */}
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Featured Articles</p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">My Project Portfolio</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {myArticles.map((article) => (
            <article key={article.id} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
              <div className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-zinc-200 mb-4 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${article.id}/400/300`} 
                  alt={article.title} 
                  className="h-full w-full object-cover grayscale" 
                />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">Article {article.id}</p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">{article.title}</h3>
              <p className="mt-3 text-xs leading-6 text-zinc-600">{article.desc}</p>
              <Button className="mt-4">Read Article</Button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;