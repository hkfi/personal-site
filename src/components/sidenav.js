import React, { useState, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
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
    { route: "/", name: "home", icon: <RiHomeLine className="text-3xl" /> },
    {
      route: "/skills",
      name: "skills",
      icon: <RiToolsLine className="text-3xl" />,
    },
    {
      route: "/projects",
      name: "projects",
      icon: <RiEyeLine className="text-3xl" />,
    },
    {
      route: "/blog",
      name: "blog",
      icon: <RiPencilLine className="text-3xl" />,
    },
    {
      route: "/contact",
      name: "contact",
      icon: <RiMailLine className="text-3xl" />,
    },
  ]

  return (
    <div className="h-full flex flex-col justify-center items-center bg-background-primary">
      <button
        className={`focus:outline-none text-3xl p-2 text-text-primary cursor-pointer ${
          theme === "light" ? " hover:text-purple-300" : "hover:text-yellow-300"
        }`}
        onClick={toggleTheme}
      >
        {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
      </button>
      <div className="flex-grow flex flex-col justify-center items-center w-full">
        {sideNavButtons.map(button => {
          return (
            <AniLink
              key={button.name}
              fade
              duration={0.4}
              to={button.route}
              className="w-full self-center text-text-primary hover:text-theme-primary py-5 flex justify-center"
            >
              {button.icon}
            </AniLink>
          )
        })}
      </div>
    </div>
  )
}
