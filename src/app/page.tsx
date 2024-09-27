import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import { usePathname } from "next/navigation";

export default function Home() {

  return (
    <main className="lg:max-h-screen bg-gray-100 border-gray-200 dark:bg-gray-900">
      <Hero />
    </main>
  );
}
