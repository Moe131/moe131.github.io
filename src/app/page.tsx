import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import uciLogo from "../assets/uci.png"
import ivcLogo from "../assets/ivc.png"
import Image from "next/image";
import ExperienceBox from "@/components/ExperienceBox/ExperienceBox";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-100 border-gray-200 dark:bg-gray-900 pb-4">
      <Hero />
      <ExperienceBox />
    </main>
  );
}
