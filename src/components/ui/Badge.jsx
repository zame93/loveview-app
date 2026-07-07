export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = "full",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-indigo-100 text-indigo-700",
    secondary: "bg-violet-100 text-violet-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-red-100 text-red-700",
    neutral: "bg-slate-100 text-slate-700",

    dark: "bg-slate-900 text-white",

    light: "bg-white text-indigo-700",

    transparent: "bg-white/20 text-white",
  };

  const sizes = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const radius = {
    full: "rounded-full",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        whitespace-nowrap
        ${variants[variant]}
        ${sizes[size]}
        ${radius[rounded]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}