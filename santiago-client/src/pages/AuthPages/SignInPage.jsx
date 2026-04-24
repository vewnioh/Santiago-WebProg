import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-200 focus:border-amber-400/60 focus:bg-neutral-900 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.08)]';

const labelClasses = 'font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500';

const SignInPage = () => (
  <div className="animate-fade-up">

    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-amber-400">
      Members Entrance · Screen 01
    </p>

    <h1
      className="mb-4 text-4xl leading-[1.02] tracking-tight text-white sm:text-5xl"
      style={{ fontFamily: "'DM Serif Display', serif" }}
    >
      Welcome back<br />
      <span className="italic text-amber-400/90">to the vault.</span>
    </h1>

    <p className="mb-9 max-w-sm text-sm leading-6 text-neutral-500">
      Sign in to resume your screening. Your watchlist, reviews, and reading
      history are waiting in the dark.
    </p>

    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

      <label className="flex flex-col gap-2">
        <span className={labelClasses}>Email</span>
        <input
          type="email"
          placeholder="you@cinemagoer.com"
          autoComplete="email"
          className={inputClasses}
        />
      </label>

      <label className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between">
          <span className={labelClasses}>Password</span>
          <button type="button" className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500 transition-colors hover:text-amber-400">
            Forgot?
          </button>
        </div>
        <input
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          className={inputClasses}
        />
      </label>

      <label className="flex items-center gap-3 pt-1">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-neutral-700 bg-neutral-900 accent-amber-400"
        />
        <span className="text-xs text-neutral-500">Keep me in the theater</span>
      </label>

      <Button type="submit" variant="primary" className="mt-3 w-full !py-3">
        Enter the Vault
      </Button>

      <div className="my-2 flex items-center gap-4">
        <div className="h-px flex-1 bg-neutral-800" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">
          Or continue with
        </span>
        <div className="h-px flex-1 bg-neutral-800" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button type="button" variant="secondary" className="w-full !py-3">
          Google
        </Button>
        <Button type="button" variant="secondary" className="w-full !py-3">
          Apple
        </Button>
      </div>
    </form>

    <div className="mt-8 flex items-center gap-2 border-t border-neutral-900 pt-6">
      <p className="text-xs text-neutral-500">New to CineVault?</p>
      <Link
        to="/auth/signup"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 transition-colors hover:text-amber-300"
      >
        Get your ticket →
      </Link>
    </div>
  </div>
);

export default SignInPage;
