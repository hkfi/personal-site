import React, { useState } from "react"

export const OverlayedImage = ({
  imageSrc,
  imageAlt,
  isHoverable,
  children,
}) => {
  const [hovered, setHovered] = useState(false)
  const hoveredBackground = `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(${imageSrc}) center center/cover no-repeat`
  const notHoveredBackground = `linear-gradient(var(--overlayColor), var(--overlayColor)), url(${imageSrc}) center center/cover no-repeat`

  function handleOnMouseEnter() {
    if (isHoverable) {
      setHovered(true)
    }
  }

  function handleOnMouseLeave() {
    if (isHoverable) {
      setHovered(false)
    }
  }

  return (
    <div
      className="h-full w-full transition ease-in duration-500"
      title={imageAlt}
      style={{
        background: hovered ? hoveredBackground : notHoveredBackground,
      }}
      onMouseEnter={() => {
        handleOnMouseEnter()
      }}
      onMouseLeave={() => {
        handleOnMouseLeave()
      }}
    >
      <div className="text-white">{children}</div>
    </div>
  )
}
