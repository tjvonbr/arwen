import { Handjet } from "next/font/google";

const handjet = Handjet({
  subsets: ["latin"],
});

export default function Arwen() {
  return (
    <p
      className={`text-2xl text-white font-black uppercase tracking-wide ${handjet.className}`}
    >
      Arwen
    </p>
  );
}
