import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import lightIcon from "../../assets/light-icon.svg"
import darkIcon from "../../assets/dark-icon.svg"
import Image from 'next/image'
import Spinner from '../spinner/pages'

const ThemeSwitch = ({}) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button  className="flex gap-1 items-center" >
                <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="hidden dark:block text-gray-900 dark:text-white" // Set light and dark mode colors
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"

            >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          
          <svg
            className='dark:hidden text-gray-600'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        <p className="text-sm md:text-base text-black dark:text-white"></p>
      </button>
    )

  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex gap-1 items-center" >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="hidden dark:block text-gray-900 dark:text-white" // Set light and dark mode colors
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"

            >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          
          <svg
            className='dark:hidden text-gray-600'
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

      <p className="text-sm md:text-base text-black dark:text-white"></p>
    </button>
  )
}

export default ThemeSwitch
