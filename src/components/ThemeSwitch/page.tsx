import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import lightIcon from "../../assets/light-icon.svg"
import darkIcon from "../../assets/dark-icon.svg"
import Image from 'next/image'

const ThemeSwitch = ({}) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex gap-1 items-center md:order-3" >
    { 
      theme === "dark" ?
      <Image src={darkIcon} className="h-5 w-5" alt="Color mode icon" />
      :
      <Image src={lightIcon} className="h-5 w-5" alt="Color mode icon" />
    }
    <p className="text-sm md:text-base dark:text-white">Light Mode</p>
</button>
  )
}

export default ThemeSwitch
