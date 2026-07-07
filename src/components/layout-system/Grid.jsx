export default function Grid({
  children,
  cols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  gap = "gap-8",
  className = "",
}) {
  return (
    <div className={`grid ${cols} ${gap} ${className}`}>
      {children}
    </div>
  );
}