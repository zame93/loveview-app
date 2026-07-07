export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-indigo-600 text-white shadow-lg hover:bg-indigo-700",

    secondary:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",

    outline:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",

    ghost:
      "text-slate-700 hover:bg-slate-100",

    danger:
      "bg-red-600 text-white hover:bg-red-700",

    success:
      "bg-green-600 text-white hover:bg-green-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      disabled={disabled}
      className={`
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}