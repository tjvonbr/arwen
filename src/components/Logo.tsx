import Link from "next/link";
import { Handjet } from "next/font/google";

const handjet = Handjet({
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <Link
      href="/"
      className={`text-2xl text-white font-black uppercase tracking-wide ${handjet.className}`}
    >
      Arwen
    </Link>
  );
}
