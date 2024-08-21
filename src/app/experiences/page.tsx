import ExperienceCard from "@/components/ExperienceCard/ExperienceCard";

export default function Experience() {
    return (
        <section id="experience" className="bg-gray-100 dark:bg-gray-900 py-12 px-6">
            <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Experiences</h1>
            <div className="space-y-8 max-w-screen-xl mx-auto">
                <ExperienceCard
                    title="Full Stack Software Developer Intern"
                    company="Mondego Research Lab, University of California, Irvine"
                    location="Irvine, CA"
                    dateRange="June 2024 - August 2024"
                    responsibilities={[
                        "Utilized LLMs and Retrieval-Augmented Generation to develop specialized AI Immigration and Tax assistants",
                        "Crawled more than 30,000 IRS website pages and 6,000 USCIS website pages and stored their data",
                        "Worked on the backend to index documents, generate embeddings, and store them in the vector database using Faiss",
                        "Worked on frontend development using Next.js and TypeScript , including developing login functionality with Google/GitHub authentication via NextAuth",
                        "Configured full-stack functionality to store user data and conversations in an SQLite database"
                    ]}
                />
                <ExperienceCard
                    title="Website Developer"
                    company="Tournex Crypto Project"
                    location="Irvine, CA"
                    dateRange="June 2022 - August 2022"
                    responsibilities={[
                        "Developed an interactive and responsive website using React JS and JavaScript",
                        "Implemented a real-time cryptocurrency price tracker by integrating different APIs which resulted in a remarkable 60% increase in website traffic in the first month.",
                        "Collaborated in the UX/UI design process to create interactive and visually appealing user interfaces.",
                        "Conducted code reviews and provided constructive feedback to team members to maintain code quality and consistency."
                    ]}
                />
            </div>
        </section>
    )
}