import uciLogo from "../../assets/uci.png"
import ivcLogo from "../../assets/ivc.png"
import Image from "next/image";


export default function Education() {
    return (
        <section id="experience" className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
            <h1 className="w-full text-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">Education</h1>
            <div className="max-w-5xl mx-auto space-y-12 sm:space-y-10">
                {/* Bachelor's Degree */}
                <div className=" rounded-lg  duration-300 w-full">
                    <div className="pb-4 sm:pb-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="flex items-center">
                                <Image
                                    src={uciLogo} // Replace with the correct path to the UCI logo
                                    alt="UCI Logo"
                                    className="w-10 h-10 md:w-12 md:h-12 mr-4"
                                />
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Bachelor of Computer Science</h2>
                                    <p className="text-sm  md:text-base text-gray-700 dark:text-gray-400">University of California, Irvine</p>
                                </div>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:text-right">
                                <p className="text-sm  md:text-base text-gray-500 dark:text-gray-400 mt-1 md:mt-0 text-right md:text-left">September 2023 -  June 2025 | Irvine, CA</p>
                            </div>
                        </div>
                        <div className="mt-3 md:ml-16">
                            <p className="sm:text-md text-gray-700 dark:text-gray-300"><strong>GPA:</strong> 3.86</p>
                            <p className="my-2 sm:text-md text-gray-900 dark:text-white font-semibold">Relevant Courses:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Intermediate Programming (I&C SCI 33)</li>
                                <li>Intro Software Engineering (IN4MATX 43)</li>
                                <li>Intro Probability and Statistics (STATS 67)</li>
                                <li>Computer Networks (COMPSCI 132)</li>
                                <li>Programming in C/C++ (I&C SCI 45C)</li>
                                <li>Programming in Java (I&C SCI 45J)</li>
                                <li>Information Retrieval (COMPSCI 121)</li>
                                <li>Intro to Data Management (COMPSCI 122A)</li>
                                <li>Data Structures Implementation and Analysis (I&C SCI 46)</li>
                                <li>Software Testing and Quality Assurance (IN4MATX 115)</li>
                                <li>Project in Databases and Web Applications (COMPSCI 122B)</li>
                                <li>Principles in System Design (I&C SCI 45C)</li>
                                <li>Machine Learning and Data-Mining(COMPSCI 178)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Associate's Degree */}
                <div className="rounded-lg  duration-300 w-full">
                    <div className="pb-4 sm:pb-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="flex items-center">
                                <Image
                                    src={ivcLogo} // Replace with the correct path to the IVC logo
                                    alt="IVC Logo"
                                    className="w-10 h-10 md:w-12 md:h-12 mr-4 rounded-full"
                                />
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">Associate of Science</h2>
                                    <p className="text-sm  md:text-base text-gray-700 dark:text-gray-400">Irvine Valley College</p>
                                </div>
                            </div>
                            <div className="mt-2 sm:mt-0 sm:text-right">
                                <p className="text-sm  md:text-base text-gray-500 dark:text-gray-400 mt-1 md:mt-0 text-right md:text-left">September 2020 - June 2023 | Irvine, CA</p>
                            </div>
                        </div>
                        <div className="mt-3 md:ml-16 ">
                            <p className="sm:text-md text-gray-700 dark:text-gray-300"><strong>GPA:</strong> 4.00</p>
                            <p className="my-2 sm:text-md text-gray-900 dark:text-white font-semibold">Relevant Courses:</p>
                            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                <li>C Programming (CS 36)</li>
                                <li>C++ Programming (CS 37)</li>
                                <li>Data Structures (CS 41)</li>
                                <li>Computer Math I (CS 6A)</li>
                                <li>Computer Math II (CS 6B)</li>
                                <li>Computer Org/Assembly Language I (CS 40A)</li>
                                <li>Computer Org/Assembly Language II (CS 40B)</li>
                                <li>Intro to Python (CS 10)</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
