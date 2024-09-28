import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import uciLogo from "../assets/uci.png"
import ivcLogo from "../assets/ivc.png"
import company from "../assets/company.png"
import Image from "next/image";
import ExperienceBox from "@/components/ExperienceBox/ExperienceBox";

export default function Home() {

  return (
    <main className="min-h-screen bg-gray-100 border-gray-200 dark:bg-gray-900 pb-4">
      <Hero />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-28 mx-auto bg-gray-100 dark:bg-gray-900 pb-10 px-6 md:px-20 lg:pb-20 ">

        {/* Experience Section */}
        <div className="flex flex-col items-start min-w-full md:min-w-56 lg:min-w-64 mb-6 md:mb-0 mt-6">
            <h1 className="text-2xl md:text-3xl font-bold text-left text-gray-900 dark:text-white mb-4 ">Experiences</h1>
        <ul className="list-disc list-inside text-left text-gray-900 dark:text-white space-y-4">
          {/* Experience 1 */}
          <li className="flex items-center">
            <Image src={uciLogo} alt="UCI Logo" className="w-8 h-8 mr-4" />
            <div>
              <h2 className="text-md md:text-lg font-semibold">Full Stack Developer Intern</h2>
              <p className="text-sm ">Mondego Research Lab, University of California Irvine</p>
              <p className="text-sm  text-gray-500 dark:text-gray-400">June 2024 - August 2024</p>
            </div>
          </li>

          {/* Experience 2 */}
          <li className="flex items-center">
            <Image src={company} alt="UCI Logo" className="w-8 h-8 mr-4" />
            <div>
              <h2 className="text-md md:text-lg font-semibold">Software Developer Intern</h2>
              <p className="text-sm ">Sepideh Zayandehrood Electrics, Isfahan, Iran</p>
              <p className="text-sm  text-gray-500 dark:text-gray-400">June 2023 - August 2023</p>
            </div>
          </li>

            {/* Experience 3 */}
            <li className="flex items-center">
            <Image src={company} alt="UCI Logo" className="w-8 h-8 mr-4" />
            <div>
              <h2 className="text-md md:text-lg font-semibold">Website Developer</h2>
              <p className="text-sm ">Tournex Crypto Project</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">June 2022 - August 2022</p>
            </div>
          </li>
        </ul>
        <a className="my-4 underline text-sky-600 dark:text-cyan-400" href="/experiences"> View more details</a>
      </div>


      {/* Education Section */}
      <div className="flex flex-col items-start min-w-full md:min-w-56 lg:min-w-64 mb-6 md:mb-0 mt-6 ">
          <h1 className="text-2xl md:text-3xl font-bold text-left text-gray-900 dark:text-white mb-4">Education</h1>
        <ul className="list-disc list-inside text-left text-gray-900 dark:text-white space-y-4">
          <li className="flex items-center">

            <div>
              <h2 className="text-md md:text-lg font-semibold">Bachelor of Computer Science</h2>
              <p className="text-sm ">University of California, Irvine</p>
              <p className="text-sm md:text-md text-gray-500 dark:text-gray-400">2023 - Present</p>
            </div>
          </li>
          <li className="flex items-center">
            <div>
              <h2 className="text-md md:text-lg font-semibold">Associate of Science</h2>
              <p className="text-sm">Irvine Valley College</p>
              <p className="text-sm md:text-md text-gray-500 dark:text-gray-400">2020 - 2023</p>
            </div>
          </li>
        </ul>
        <a className="my-4 underline text-sky-600 dark:text-cyan-400" href="/education"> View more details</a>
      </div>
        
        
       {/* Projects Section */}
        <div className="flex flex-col items-start min-w-full md:min-w-56 lg:min-w-64 mb-6 md:mb-0 mt-6">
            <h1 className="text-2xl md:text-3xl font-bold text-left text-gray-900 dark:text-white mb-4">Projects</h1>
        <ul className="list-disc list-inside text-left text-gray-900 dark:text-white space-y-4">
          <li className="">
              <span className="text-md  ">Food Delivery Full Stack Mobile App</span>
          </li>
          <li className="">
              <span className="text-md ">CryptoFolio Web Application</span>
          </li>
          <li className="">
              <span className="text-md ">Next.js Real-time Chat Application</span>
          </li>
          <li className="">
              <span className="text-md ">Hotel Reservation System</span>
          </li>
          <li className="">
              <span className="text-md ">Search Engine Web Application</span>
          </li>
        </ul>
        <a className="my-4 underline text-sky-600 dark:text-cyan-400" href="/projects"> View all my projects</a>
      </div>

    </section>

    </main>
  );
}
