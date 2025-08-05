import { Bitter, Inter, Archivo } from "next/font/google";

const inter = Inter({
  weight: "variable",
  subsets: ["latin"],
});
const bitter = Bitter({
  weight: "variable",
  subsets: ["latin"],
});
const archivoSemiExpandedBold = Archivo({
  weight: "700",
  subsets: ["latin"],
});

export { inter, bitter, archivoSemiExpandedBold };
