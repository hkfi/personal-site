import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"

const Navbar = () => {
  const [navbarBurgerStatus, setNavbarBurgerStatus] = useState("")
  function handleNavbarBurgerClick() {
    navbarBurgerStatus === ""
      ? setNavbarBurgerStatus("is-active")
      : setNavbarBurgerStatus("")
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
              {allContentfulRecentProjects.edges.map(edge => {
                return (
                  <Link
                    className="navbar-item"
                    to={`/#${edge.node.name.split(" ").join("")}`}
                  >
                    {edge.node.name}
                  </Link>
                )
              })}
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
