import { Link } from "react-router-dom";

const variantClasses = {
  primary: "bg-amber-400 text-neutral-950 border-amber-400 hover:bg-amber-300",
  secondary: "bg-transparent text-neutral-300 border-neutral-700 hover:border-neutral-500 hover:text-white",
};

const Button = ({
  children,
  to,
  type = "button",
  variant = "secondary",
  className = "",
}) => {
  const classes = [
    "inline-flex items-center justify-center rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-200",
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(" ")
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
