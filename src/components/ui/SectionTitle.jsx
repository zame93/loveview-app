export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  maxWidth = "max-w-3xl",
  className = "",
}) {
  const alignment = {
    left: {
      wrapper: "",
      text: "text-left",
    },
    center: {
      wrapper: "mx-auto",
      text: "text-center",
    },
    right: {
      wrapper: "ml-auto",
      text: "text-right",
    },
  };

  return (
    <div
      className={`
        ${maxWidth}
        ${alignment[align].wrapper}
        ${alignment[align].text}
        ${className}
      `}
    >
      {badge && (
        <div className="mb-5">
          {badge}
        </div>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}