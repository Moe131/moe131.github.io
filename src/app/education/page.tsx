export default function Education() {
    return (
        <section id="education" className="bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:py-12 sm:px-6">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-left text-gray-900 dark:text-white mb-10">Education</h1>
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">

                {/* Bachelor's Degree */}
                <div className="border-b border-gray-300 dark:border-gray-700 pb-4 sm:pb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Bachelor of Computer Science</h2>
                            <p className="sm:text-md text-gray-700 dark:text-gray-400">University of California, Irvine</p>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:text-right">
                            <p className="sm:text-md text-gray-700 dark:text-gray-400">September 2023 - June 2025</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="sm:text-md text-gray-700 dark:text-gray-300"><strong>GPA:</strong> 3.97</p>
                        <p className="mt-2 sm:text-md text-gray-900 dark:text-white font-semibold">Relevant Courses:</p>
                        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 dark:text-gray-300">
                            <li>Intermediate Programming (I&C SCI 33)</li>
                            <li>Intro Software Engineering (IN4MATX 43)</li>
                            <li>Intro Probability and Statistics for Computer Science (STATS 67)</li>
                            <li>Computer Networks (COMPSCI 132)</li>
                            <li>Programming in C/C++ (I&C SCI 45C)</li>
                            <li>Programming in Java (I&C SCI 45J)</li>
                            <li>Information Retrieval (COMPSCI 121)</li>
                            <li>Intro to Data Management (COMPSCI 122A)</li>
                            <li>Data Structures Implementation and Analysis (I&C SCI 46)</li>
                            <li>Software Testing and Quality Assurance (IN4MATX 115)</li>
                        </ul>
                    </div>
                </div>


                {/* Associate's Degree */}
                <div className="border-b border-gray-300 dark:border-gray-700 pb-4 sm:pb-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div>
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Associate of Science</h2>
                            <p className="sm:text-md text-gray-700 dark:text-gray-400">Irvine Valley College</p>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:text-right">
                            <p className="sm:text-md text-gray-700 dark:text-gray-400">September 2020 - June 2023</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="sm:text-md text-gray-700 dark:text-gray-300"><strong>GPA:</strong> 4.00</p>
                        <p className="mt-2 sm:text-md text-gray-900 dark:text-white font-semibold">Relevant Courses:</p>
                        <ul className="list-disc list-inside text-sm md:text-base text-gray-700 dark:text-gray-300">
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
        </section>
    );
}
