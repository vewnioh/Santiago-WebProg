import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-all duration-200 focus:border-amber-400/60 focus:bg-neutral-900 focus:shadow-[0_0_0_4px_rgba(251,191,36,0.08)]';

const labelClasses = 'font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500';

const SignUpPage = () => (
  <div className="animate-fade-up">

    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.35em] text-amber-400">
      Box Office · Ticket Issuance
    </p>

    <h1
      className="mb-4 text-4xl leading-[1.02] tracking-tight text-white sm:text-5xl"
      style={{ fontFamily: "'DM Serif Display', serif" }}
    >
      Reserve your<br />
      <span className="italic text-amber-400/90">seat in the dark.</span>
    </h1>

    <p className="mb-9 max-w-sm text-sm leading-6 text-neutral-500">
      Claim your spot in the house. We save your seat, your reviews go into the
      archive, and your ratings into the ledger.
    </p>

    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>First name</span>
          <input
            type="text"
            placeholder="Ingrid"
            autoComplete="given-name"
            className={inputClasses}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={labelClasses}>Last name</span>
          <input
            type="text"
            placeholder="Bergman"
            autoComplete="family-name"
            className={inputClasses}
          />
        </label>
      </div>

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
        <span className={labelClasses}>Password</span>
        <input
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          className={inputClasses}
        />
        <span className="text-[11px] text-neutral-600">
          Minimum 8 characters — letters, numbers, and a symbol or two.
        </span>
      </label>

      <Button type="submit" variant="primary" className="mt-3 w-full !py-3">
        Claim Your Ticket
      </Button>

      <div className="my-2 flex items-center gap-4">
        <div className="h-px flex-1 bg-neutral-800" />
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-600">
          Or sign up with
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
      <p className="text-xs text-neutral-500">Already a member?</p>
      <Link
        to="/auth/signin"
        className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 transition-colors hover:text-amber-300"
      >
        Sign in →
      </Link>
    </div>

    <p className="mt-6 text-[11px] leading-5 text-neutral-600">
      By claiming your ticket, you agree to be kind about Shyamalan, refrain from
      spoiling endings, and never rate films you haven't finished.
    </p>
  </div>
);

export default SignUpPage;
