import Logo from "@/components/Logo";
import Arwen from "./Arwen";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-10 py-5 flex items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
        <Arwen />
      </Link>
    </header>
  );
}
