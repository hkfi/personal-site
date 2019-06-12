import React, { useState, useEffect } from "react"
import { Link, useStaticQuery } from "gatsby"

const Navbar = () => {
  const [navbarBurgerStatus, setNavbarBurgerStatus] = useState("")
  function handleNavbarBurgerClick() {
    navbarBurgerStatus === ""
      ? setNavbarBurgerStatus("is-active")
      : setNavbarBurgerStatus("")
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme"))

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [])

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

  const { allContentfulRecentProjects } = useStaticQuery(graphql`
    query {
      allContentfulRecentProjects(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            name
            languageAndTechnologies
            description {
              json
            }
          }
        }
      }
    }
  `)

  return (
    <nav className="navbar is-fixed-top is-transparent">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <span className="logo">hirokicodes</span>
        </Link>
        <div
          className={`navbar-burger burger ${navbarBurgerStatus}`}
          data-target="navbar"
          onClick={handleNavbarBurgerClick}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        id="navbar"
        className={`navbar-menu has-text-centered ${navbarBurgerStatus}`}
      >
        <div className="navbar-end">
          <a className="navbar-item" onClick={toggleTheme}>
            {theme === "light" ? (
              <i className="fas fa-moon" />
            ) : (
              <i className="fas fa-sun" />
            )}
          </a>
          <Link className="navbar-item" to="/#skills">
            <span>Skills</span>
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link is-arrowless" to="/#projects">
              Projects
            </Link>
            <div className="navbar-dropdown is-boxed">
              {allContentfulRecentProjects.edges.map((edge, i) => {
                return (
                  <Link
                    key={i}
                    className="navbar-item"
                    to={`/#${edge.node.name.split(" ").join("")}`}
                  >
                    {edge.node.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <Link className="navbar-item" to="/#contact">
            <span>Contact</span>
          </Link>
          <Link className="navbar-item" to="/blog">
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
