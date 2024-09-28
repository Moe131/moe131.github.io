import Hero from "@/components/Hero/page";
import HomeGrid from "@/components/HomeGrid/HomeGrid";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-100 border-gray-200 dark:bg-gray-900 pb-4">
      <Hero />
      <HomeGrid />
    </main>
  );
}
