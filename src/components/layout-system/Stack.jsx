export default function Stack({
  children,
  gap = "gap-6",
  className = "",
}) {
  return (
    <div className={`flex flex-col ${gap} ${className}`}>
      {children}
    </div>
  );
}