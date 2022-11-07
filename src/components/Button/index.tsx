import { twMerge } from "tailwind-merge";

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...rest }) => (
  <button
    {...rest}
    className={twMerge(
      "rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700",
      className
    )}
  >
    {children}
  </button>
);
