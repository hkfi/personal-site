import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSkills(sort: { fields: updatedAt, order: ASC }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {/* Header */}
      <section className="hero is-fullheight is-fullheight-with-navbar has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">hirokicodes</h1>
            <h2 className="subtitle is-3">Full Stack Developer</h2>
            <span className="icon is-large">
              <a href="mailto: hirokicodes@gmail.com">
                <i className="fas fa-envelope fa-2x" />
              </a>
            </span>
            <span className="icon is-large">
              <a
                href="https://github.com/hirokicodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            </span>
          </div>
        </div>
      </section>

      <section className="section has-text-centered" id="skills">
        {/* Skills */}
        <div className="section-heading">
          <h3 className="title is-2">Skills</h3>
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title">Programming Languages</h1>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="pl devicon-javascript-plain" />
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="pl devicon-typescript-plain" />
                </a>
                <a
                  href="https://golang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="pl devicon-go-plain" />
                </a>
                <a
                  href="https://www.python.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="pl devicon-python-plain" />
                </a>
                <a
                  href="https://www.ruby-lang.org/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="pl devicon-ruby-plain" />
                </a>
              </div>
              <div className="column">
                <h1 className="title">Frameworks/Libraries/Tools</h1>
                {data.allContentfulSkills.edges.map(edge => {
                  return <span className="tag">{edge.node.name}</span>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section has-text-centered" id="projects">
        <div className="section-heading">
          <h3 className="title is-2">Projects</h3>
        </div>

        {/* Crypto Social Dashboard */}
        <section className="section has-text-centered" id="cryptocurrency">
          <div className="section-heading">
            <h3 className="title is-2">Cryptocurrency Social Platform</h3>
            <div className="container">
              <p>
                A social platform to keep track of the latest cryptocurrency
                trends and news
              </p>
              <a
                href="https://github.com/hirokicodes/crypto-graphql-prisma"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end Code
              </a>
              <a
                href="https://github.com/hirokicodes/vue-crypto-dashboard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-end Code
              </a>
            </div>
          </div>
        </section>

        {/* Golang Chat App */}
        <section className="section has-text-centered" id="chat-app">
          <div className="section-heading">
            <h3 className="title is-2">Golang Chat App</h3>
            <div className="container">
              <p>A place to chat with other people</p>
              <a
                href="https://github.com/hirokicodes/golang-chat-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end Code
              </a>
              <a
                href="https://github.com/hirokicodes/golang-chat-app-front"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-end Code
              </a>
            </div>
          </div>
        </section>

        {/* Car Rental Marketplace */}
        <section className="section has-text-centered" id="car-marketplace">
          <div className="section-heading">
            <h3 className="title is-2">Car Rental Marketplace</h3>
            <div className="container">
              <p>An Airbnb for cars</p>
              <a
                href="https://github.com/jphoga/super_cars"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}
