import { cx } from "class-variance-authority";
import { archivoSemiExpandedBold } from "../styles/fonts";

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
    <div className={cx("flex flex-col items-center gap-2 p-8", className)}>
      <h3 className={`text-5xl font-extrabold ${archivoSemiExpandedBold.className}`}>{value}</h3>
      <p className="text-md font-medium">{description}</p>
    </div>
  );
}
