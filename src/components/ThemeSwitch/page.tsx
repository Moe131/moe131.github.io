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
      <button  className="flex gap-1 items-center md:order-3" >
        <Image src={darkIcon} className="hidden w-6 h-6 dark:block" alt="Color mode icon" />
        <Image src={lightIcon} className="w-6 h-6 dark:hidden" alt="Color mode icon" />
        <p className="text-sm md:text-base dark:text-white">Light Mode</p>
      </button>
    )

  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex gap-1 items-center md:order-3" >
      <Image src={darkIcon} className="hidden w-6 h-6  dark:block" alt="Color mode icon" />
      <Image src={lightIcon} className=" w-6 h-6  dark:hidden" alt="Color mode icon" />

      <p className="text-sm md:text-base dark:text-white">Light Mode</p>
    </button>
  )
}

export default ThemeSwitch
