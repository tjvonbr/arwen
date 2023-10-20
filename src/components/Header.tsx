import Logo from "@/components/Logo";
import Arwen from "./Arwen";

export default function Header() {
  return (
    <header className="hidden sm:flex w-full px-10 py-5 items-center space-x-2">
      <Logo />
      <Arwen />
    </header>
  );
}
