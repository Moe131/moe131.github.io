import uciLogo from "../../assets/uci.png"
import ivcLogo from "../../assets/ivc.png"
import Image from "next/image";
export default function ExperienceBox() {

  return (
      <section id="" className="self-auto flex flex-col md:flex-row items-center justify-center md:gap-14 bg-gray-100 dark:bg-gray-900 py-10 px-6 md:p-20 lg:pb-24">
            <div className="flex flex-col items-center md:min-w-56 lg:min-w-64 mb-6 md:mb-0 ">
                    <h1 className=" text-2xl md:text-3xl font-bold text-left text-gray-900 dark:text-white mb-2">Experiences</h1>
                    <a className="underline text-sky-600 dark:text-cyan-400" href="/experiences"> View Details</a>
            </div>

            <div className="text-center md:text-left space-y-4 md:space-y-6 w-full ">
            {/* Experience 1 */}
            <div className="bg-white dark:bg-gray-800 py-6  px-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="flex items-center">
                                <Image
                                    src={uciLogo} // Replace with the correct path to the UCI logo
                                    alt="UCI Logo"
                                    className="w-12 h-12 mr-4"
                                />
                                <div className="mx-auto pr-5">
                                    <h2 className=" text-md md:text-2xl font-bold text-gray-900 dark:text-white">Full Stack Developer Intern</h2>
                                    <a className="underline text-black dark:text-white" href="#"><p className="text-sm md:text-lg ">Mondego Research Lab, University of California</p></a>
                                    <p className="text-sm md:text-md text-gray-500 dark:text-gray-400  ">June 2024 - August 2024</p>              
                                </div>
                            </div>
                        </div>
                </div>

            {/* Experience 2 */}
            <div className="bg-white dark:bg-gray-800  py-6  px-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="flex items-center">
                                <Image
                                    src={ivcLogo} // Replace with the correct path to the IVC logo
                                    alt="IVC Logo"
                                    className="w-12 h-12 mr-4 rounded-full"
                                />
                                <div className="mx-auto pr-5">
                                    <h2 className="text-md md:text-2xl font-bold text-gray-900 dark:text-white">Software Developer Intern</h2>
                                    <a className="underline text-black dark:text-white" href="#"><p className="text-sm md:text-lg ">Sepideh Zayandehrood Electrics, Isfahan, Iran</p></a>
                                    <p className="text-sm md:text-md text-gray-500 dark:text-gray-400  ">June 2023 - August 2023</p>  
                                </div>
                            </div>
                        </div>
                </div>



            {/* Experience 3 */}
            <div className="bg-white dark:bg-gray-800  py-6  px-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="flex items-center ">
                                <Image
                                    src={ivcLogo} // Replace with the correct path to the IVC logo
                                    alt="IVC Logo"
                                    className="w-12 h-12 mr-4 rounded-full"
                                />
                                <div className="mx-auto pr-5"> 
                                  <h2 className=" text-md md:text-2xl font-bold text-gray-900 dark:text-white">Website Developer</h2>
                                    <a className="underline text-black dark:text-white" href="#"><p className="text-sm md:text-lg ">Tournex Crypto Project</p></a>
                                    <p className="text-sm md:text-md text-gray-500 dark:text-gray-400  ">June 2022 - August 2022</p>  
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </section>
  );
}
