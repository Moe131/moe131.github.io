interface ExperienceCardProps {
    title: string
    company: string
    location: string
    dateRange: string
    responsibilities: string[]
}

const skills: string[] = ["React", "ReactJS", "React Native", "Next.js", "TypeScript", "JavaScript", "Faiss", "Python", "NextAuth", "SQLite", "APIs", "NextAuth", "LLMs", "UX/UI","PostgreSQL", "Node.js", "Express", "Tailwind", "API"]

export default function ExperienceCard(props: ExperienceCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
            <div className="flex flex-col md:flex-row justify-between">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {props.title}
                    </h2>
                    <p className="sm:text-md text-gray-700 dark:text-gray-400">
                        {props.company}
                    </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0 text-right md:text-left">
                    {props.dateRange} | {props.location}
                </p>
            </div>
            <ul className="text-sm md:text-base list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                {props.responsibilities.map((responsibility, index) => (
                    <li key={index}>
                        {responsibility.split(" ").map((word, idx) => {
                            if (skills.includes(word)) {
                                return (
                                    <span key={idx} className="font-bold text-sky-600 dark:text-cyan-400">
                                        {word+ " "} 
                                    </span>
                                );
                            }
                            return `${word} `;
                        })}
                    </li>
                ))}
            </ul>
        </div>

    )
}
