export default function Card({
  children,
  variant = "default",
  className = "",
  padding = "p-6",
  shadow = "shadow-lg",
  rounded = "rounded-3xl",
  bordered,
  hover = true,
  ...props
}) {
  const variants = {
    default: "bg-white text-slate-900",
    primary: "bg-indigo-600 text-white",
    dark: "bg-slate-900 text-white",
    slate: "bg-slate-50 text-slate-900",
    gradient:
      "bg-gradient-to-br from-indigo-600 to-violet-600 text-white",
  };

  const hasBorder =
    bordered ?? (variant === "default" || variant === "slate");

  return (
    <div
      className={`
        ${variants[variant]}
        ${padding}
        ${shadow}
        ${rounded}
        ${hasBorder ? "border border-slate-200" : ""}
        ${hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" : ""}
        flex flex-col
        h-full
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}