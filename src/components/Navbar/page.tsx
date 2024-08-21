"use client"

import { useState } from "react"
import logo from "../../assets/logo.png"
import Image from "next/image"
import { useTheme } from "next-themes"
import ThemeSwitch from "../ThemeSwitch/page"
import Link from "next/link"


export default function Navbar(){

  const [menuChecked, setMenuChecked] = useState(true)

  function toggleMenu(){
    setMenuChecked(!menuChecked)
  }

  return(
  <nav className="bg-gray-100 border-gray-800 dark:bg-gray-900 md:py-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo}  className="h-10 w-32 md:h-12 w-38" alt="Logo" />
          </Link>
        <ThemeSwitch />
        <button onClick={toggleMenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={menuChecked? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray rounded-lg bg-gray-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-sky-700 rounded md:bg-transparent md:text-sky-600 md:p-0 dark:text-white md:dark:text-cyan-400" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="experiences" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Experiences</Link>
            </li>
            <li>
              <Link href="/projects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-cyan-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
          </ul>
        </div>
    </div>
  </nav>
    )
}