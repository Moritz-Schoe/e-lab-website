import { cx } from "class-variance-authority";
import { archivoExpandedBlack } from "../styles/fonts";

interface StatProps {
  description: string;
  value: string;
  className?: string;
}

export default function Stat({
  description,
  value,
  className = "text-white",
}: StatProps) {
  return (
    <div className={cx("flex flex-col items-center gap-3 p-8", className)}>
      <h3 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight ${archivoExpandedBlack.className}`}>{value}</h3>
      <p className="text-sm md:text-base font-medium text-center">{description}</p>
    </div>
  );
}
