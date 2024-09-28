import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"


interface ExperienceCardProps {
    title: string
    company: string
    location: string
    dateRange: string
    image : string | StaticImport
    responsibilities: string[]
}

const skills: string[] = ["React", "ReactJS", "React Native", "Next.js", "TypeScript", "JavaScript", "Faiss", "Python", "NextAuth", "SQLite", "APIs", "NextAuth", "LLMs", "UX/UI","PostgreSQL", "Node.js", "Express", "Tailwind", "API"]

export default function ExperienceCard(props: ExperienceCardProps) {
    return (
        <div className="text-gray-900 dark:text-white w-full">
            <li className="flex items-center">
                <Image src={props.image} alt="UCI Logo" className="w-10 h-10 mr-4" />
                <div>
                    <h2 className="text-md md:text-xl font-semibold"> {props.title}</h2>
                    <p className="text-sm  md:text-base">{props.company}</p>
                    <p className="text-sm   md:text-base text-gray-500 dark:text-gray-400"> {props.dateRange} | {props.location}</p>
                </div>
            </li>
            <ul className="ml-6 md:ml-10 text-xs md:text-sm list-disc list-inside mt-4 text-gray-700 dark:text-gray-300 space-y-2">
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
