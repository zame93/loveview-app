export default function Section({
  id,
  children,
  className = "",
  fullScreen = false,
  spacing = "py-20 md:py-24 lg:py-28",
  ...props
}) {
  return (
    <section
      id={id}
      className={`
        w-full
        ${fullScreen ? "min-h-screen flex items-center" : ""}
        ${spacing}
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
}