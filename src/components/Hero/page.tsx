"use client"
import React from "react"
import heroImg from '../../assets/hero.png'
import lighttwitterIcon from '../../assets/twitter-light.svg'
import lightgithubIcon from '../../assets/github-light.svg'
import lightlinkedinIcon from '../../assets/linkedin-light.svg'
import darktwitterIcon from '../../assets/twitter-dark.svg'
import darkgithubIcon from '../../assets/github-dark.svg'
import darklinkedinIcon from '../../assets/linkedin-dark.svg'
import Image from "next/image"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function Hero() {
    const { theme, setTheme } = useTheme()

    return (
        <section id="hero" className="self-auto flex flex-col md:flex-row items-center justify-center md:gap-14 bg-gray-100 dark:bg-gray-900 p-6 md:p-20 lg:pb-24  ">
            <div className="w-56 h-56 md:w-80 md:h-80 md:min-w-72 mb-6 md:mb-0">
                <Image className="rounded-full object-cover shadow-lg" src={heroImg} alt="Mohammad Mirzaei Profile Picture" />
             </div>
            <div className="text-center md:text-left space-y-4 md:space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Mohammad Mirzaei
                </h1>
                <div className="flex w-max mx-auto md:mx-0 items-center">
                    <h2 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 text-2xl md:text-3xl text-sky-600 dark:text-cyan-400">
                    Software Developer
                    </h2>
                </div>
                <div className="flex justify-center md:justify-start space-x-6 mt-4">
                    <a href="https://x.com" target="_blank">
                        <Image className="hidden w-6 h-6 md:w-8 md:h-8 dark:block" src={darktwitterIcon} alt="Twitter icon" />
                        <Image className=" w-6 h-6 md:w-8 md:h-8 dark:hidden" src={lighttwitterIcon} alt="Twitter icon" />

                    </a>
                    <a href="https://github.com/Moe131" target="_blank">
                        <Image className="hidden w-6 h-6 md:w-8 md:h-8 dark:block" src={darkgithubIcon} alt="Github icon" />
                        <Image className=" w-6 h-6 md:w-8 md:h-8 dark:hidden" src={lightgithubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/moemirzaei" target="_blank">
                        <Image className="hidden w-6 h-6 md:w-8 md:h-8 dark:block" src={darklinkedinIcon} alt="LinkedIn icon" />
                        <Image className=" w-6 h-6 md:w-8 md:h-8 dark:hidden" src={lightlinkedinIcon} alt="LinkedIn icon" />

                    </a>
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-">
                
                I am Mohammad Mirzaei, a dedicated Computer Science student at the University of California, Irvine.  
                I enjoy coding and problem-solving and I have experience developing full-stack applications, designing scalable backend systems, and working with machine learning and data engineering. I&apos;m ready to work 
                on exciting opportunities. Feel free to <Link className="underline text-sky-600 dark:text-cyan-400" href="/contact">contact me</Link> for collaboration!

                </p>
                <a href="https://drive.google.com/file/d/1ZEqZUEt-spYrgeRoxzZwIRQfZPrzCNeP/view?usp=sharing" target="_blank">
                    <button className="mt-4 md:mt-6 px-6 py-2 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 dark:bg-cyan-600 dark:hover:bg-sky-700">
                    Download Resume
                    </button>
                </a>
            </div>
        </section>
    )
}
