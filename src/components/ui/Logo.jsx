import loveviewIcon from "../../assets/logo/loveview-icon.png";

export default function Logo({ size = "md", light = false }) {
  const iconSizes = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-12 w-12",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className="flex items-center gap-3">
      <img
        src={loveviewIcon}
        alt="LoveView"
        className={iconSizes[size]}
      />

      <span className={`${textSizes[size]} font-bold tracking-tight`}>
  <span className={light ? "text-white" : "text-slate-900"}>
    Love
  </span>
  <span className={light ? "text-white" : "text-indigo-600"}>
  View
</span>
</span>
    </div>
  );
}