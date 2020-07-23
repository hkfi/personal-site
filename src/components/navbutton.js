import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const NavButton = ({ button, current }) => {
  const [buttonHovered, setButtonHovered] = useState(false)

  return (
    <div className="relative w-full">
      <AniLink
        fade
        duration={0.4}
        to={button.route}
        className="w-full self-center transition duration-200 ease-in-out hover:text-theme-primary py-5 flex justify-center"
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        {button.icon}
      </AniLink>
      <div
        className={`absolute top-0 mt-5 font-semibold bg-background-tag text-theme-primary rounded px-2 py-1 transition ease-in-out duration-200 transform ${
          buttonHovered
            ? "opacity-100 scale-100 translate-x-12"
            : "opacity-0 scale-0 translate-x-0"
        }`}
      >
        {button.name}
      </div>
    </div>
  )
}
