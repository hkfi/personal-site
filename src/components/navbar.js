import React, { useState } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [navbarBurgerStatus, setNavbarBurgerStatus] = useState("")
  function handleNavbarBurgerClick() {
    navbarBurgerStatus === ""
      ? setNavbarBurgerStatus("is-active")
      : setNavbarBurgerStatus("")
  }

  return (
    <nav className="navbar is-fixed-top is-transparent">
      <div className="navbar-brand">
        <div
          className={`navbar-burger burger ${navbarBurgerStatus}`}
          data-target="navbarExampleTransparentExample"
          onClick={handleNavbarBurgerClick}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        className={`navbar-menu has-text-centered ${navbarBurgerStatus}`}
      >
        <div className="navbar-end">
          <Link className="navbar-item" to="/">
            <span>Contact</span>
          </Link>
          <Link className="navbar-item" to="/#skills">
            <span>Skills</span>
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link is-arrowless" to="/#projects">
              Projects
            </Link>
            <div className="navbar-dropdown is-right is-boxed">
              <Link className="navbar-item" to="/#cryptocurrency">
                Cryptocurrency Social Platform
              </Link>
              <Link className="navbar-item" to="/#chat-app">
                Anonymous Chat Application
              </Link>
              <Link className="navbar-item" to="/#car-marketplace">
                Car Rental Marketplace
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/blog">
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
