import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="px-6 md:px-6 xl:px-40">
      <Navbar />

      <Hero />
    </header>
  );
}
