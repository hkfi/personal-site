import React, { useState, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { NavButton } from "./navbutton"
import {
  RiHomeLine,
  RiPencilLine,
  RiToolsLine,
  RiEyeLine,
  RiMailLine,
  RiMoonLine,
  RiSunLine,
} from "react-icons/ri"

export const SideNav = () => {
  let localStorageTheme = null
  if (typeof window !== "undefined") {
    localStorageTheme = localStorage.getItem("theme")
  }

  const [theme, setTheme] = useState(localStorageTheme)

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [theme])

  function toggleTheme() {
    document.documentElement.classList.add("color-theme-in-transition")
    if (theme === "dark") {
      setTheme("light")
      localStorage.setItem("theme", "light")
      document.documentElement.removeAttribute("data-theme")
    } else {
      setTheme("dark")
      localStorage.setItem("theme", "dark")
      document.documentElement.setAttribute("data-theme", "dark")
    }
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition")
    }, 1000)
  }

  const sideNavButtons = [
    { route: "/", name: "Home", icon: <RiHomeLine className="text-3xl" /> },
    {
      route: "/skills",
      name: "Skills",
      icon: <RiToolsLine className="text-3xl" />,
    },
    {
      route: "/projects",
      name: "Projects",
      icon: <RiEyeLine className="text-3xl" />,
    },
    {
      route: "/blog",
      name: "Blog",
      icon: <RiPencilLine className="text-3xl" />,
    },
    {
      route: "/contact",
      name: "Contact",
      icon: <RiMailLine className="text-3xl" />,
    },
  ]

  return (
    <div className="h-full fixed flex flex-col justify-center items-center bg-background-primary">
      <a
        className={`focus:outline-none text-3xl p-2 cursor-pointer ${
          theme === "light" ? " hover:text-purple-300" : "hover:text-yellow-300"
        }`}
        onClick={toggleTheme}
      >
        {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
      </a>
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        {sideNavButtons.map(button => {
          return <NavButton key={button.name} button={button} />
        })}
      </div>
    </div>
  )
}
