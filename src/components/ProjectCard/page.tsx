import Image, { StaticImageData } from "next/image"

interface ProjectCardProps {
    title: string
    description: string
    technologies: string[]
    githubLink: string
    demoLink: string
    image: StaticImageData
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between h-full">
            <a href={props.demoLink} target="_blank" className="block">
                <Image className="rounded-lg w-full h-48 object-cover" src={props.image} alt={`${props.title} logo`} />
            </a>
            <div className="flex-grow">
                <h2 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-white">{props.title}</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{props.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {props.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="mt-4 flex space-x-4">
                <a href={props.githubLink} target="_blank" className="bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500">
                    GitHub
                </a>
                <a href={props.demoLink} target="_blank" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
                    Demo
                </a>
            </div>
        </div>
    )
}
