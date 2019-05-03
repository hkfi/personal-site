import React from "react"

const Navbar = props => {
  return (
    <nav className="navbar is-fixed-top is-transparent">
      <div className="navbar-brand">
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        className="navbar-menu has-text-centered"
      >
        <div className="navbar-end">
          <a className="navbar-item" href="/#">
            <span>Contact</span>
          </a>
          <a className="navbar-item" href="#skills">
            <span>Skills</span>
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless" href="#projects">
              Projects
            </a>
            <div className="navbar-dropdown is-right is-boxed">
              <a className="navbar-item" href="#cryptocurrency">
                Cryptocurrency Social Platform
              </a>
              <a className="navbar-item" href="#chat-app">
                Anonymous Chat Application
              </a>
              <a className="navbar-item" href="#car-marketplace">
                Car Rental Marketplace
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
