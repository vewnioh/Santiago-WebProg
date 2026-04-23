import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Background image with overlay */}
      <img
        src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1400"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-lg w-full">

        {/* 404 large number */}
        <p className="text-[120px] sm:text-[160px] font-bold leading-none tracking-tighter text-white/5 select-none mb-0">
          404
        </p>

        <div className="-mt-8 sm:-mt-12">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-400">
            Error 404
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Scene Not Found
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-500">
            This scene ended up on the cutting room floor. The link you followed
            is broken, or this page was moved to the vault.
          </p>

          {/* Divider */}
          <div className="mx-auto my-8 flex items-center gap-4 max-w-[200px]">
            <div className="h-px flex-1 bg-neutral-800" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400/50" />
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button to="/" variant="primary">Go Home</Button>
            <Button to="/articles" variant="secondary">Browse Reviews</Button>
          </div>
        </div>

      </div>

      <p className="absolute bottom-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-700">
        CineVault · Lost in the Vault
      </p>

    </div>
  );
}

export default NotFoundPage;
