import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";

export default function Experience() {
    return (
        <section id="experience" className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
            <h1 className="text-center text-3xl sm:text-4xl font-bold text-left text-gray-900 dark:text-white mb-10">Experiences</h1>
            <div className="space-y-8 max-w-4xl mx-auto">
                <ExperienceCard
                    title="Full Stack Developer Intern"
                    company="Mondego Research Lab, University of California, Irvine"
                    location="Irvine, CA"
                    dateRange="June 2024 - August 2024"
                    responsibilities={[
                        "Developed specialized AI Immigration and Tax assistants using LLMs and Retrieval-Augmented Generation with 92% accuracy in responses.",
                        "Developed a login functionality for the app using Next.js , TypeScript , and NextAuth used by over 1,000 UCI students",
                        "Configured full-stack functionality to store user data and conversations in an SQLite database.",
                        "Crawled and indexed 30,000 IRS and 6,000 USCIS pages, generated embeddings, and stored them in a vector database using Faiss",
                    ]}
                />

                <ExperienceCard
                    title="Software Developer Intern"
                    company="Sepideh Zayandehrood Electrics, Isfahan, Iran"
                    location="Remote"
                    dateRange="June 2023 - August 2023"
                    responsibilities={[
                        "Collaborated with the senior developer to design and implement a PostgreSQL database system to handle customer data/orders",
                        "Created a UI admin panel using Next.js , Tailwind to allow management of customer orders reducing the company’s order processing time by 50%.",
                        "Built API endpoints using Node.js and Express framework to connect the frontend with the database",
                        "Successfully transferred data from 40,000 customers into the new database system",
                    ]}
                />

                <ExperienceCard
                    title="Website Developer"
                    company="Tournex Crypto Project"
                    location="Irvine, CA"
                    dateRange="June 2022 - August 2022"
                    responsibilities={[
                        "Developed an interactive and responsive website using JavaScript and React library",
                        "Implemented a real-time cryptocurrency price tracker by integrating different APIs which resulted in a remarkable 60% increase in website traffic in the first month.",
                        "Collaborated in the UX/UI design process to create interactive and visually appealing user interfaces",
                    ]}
                />
            </div>
        </section>
    )
}