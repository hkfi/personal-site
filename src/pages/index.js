import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SkillsSection from "../components/skillsSection"
import ContactForm from "../components/contactForm"

export default () => {
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
            <span className="icon is-large">
              <a
                href="https://codepen.io/hirokicodes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-codepen fa-2x" />
              </a>
            </span>
            <span className="icon is-large">
              <a
                href="https://stackoverflow.com/users/11485944/hirokicodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-stack-overflow fa-2x" />
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
                <h1 className="subtitle is-3">Programming Languages</h1>
                <div className="columns is-mobile is-multiline is-centered">
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="column"
                  >
                    <i className="pl devicon-javascript-plain" />
                  </a>
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="column"
                  >
                    <i className="pl devicon-typescript-plain" />
                  </a>
                  <a
                    href="https://www.python.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="column"
                  >
                    <i className="pl devicon-python-plain" />
                  </a>
                  <a
                    href="https://golang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="column"
                  >
                    <i className="pl devicon-go-plain" />
                  </a>
                  <a
                    href="https://www.ruby-lang.org/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="column"
                  >
                    <i className="pl devicon-ruby-plain" />
                  </a>
                </div>
              </div>
              <div className="column">
                <SkillsSection />
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
        {allContentfulRecentProjects.edges.map((edge, i) => {
          return (
            <section
              className="section has-text-centered"
              id={`${edge.node.name.split(" ").join("")}`}
              key={i}
            >
              <div className="section-heading">
                <h3 className="subtitle is-3">{edge.node.name}</h3>
                <div className="subtitle">
                  {edge.node.languageAndTechnologies.map(name => {
                    return (
                      <span className="tag" key={name}>
                        {name}
                      </span>
                    )
                  })}
                </div>
                <div className="columns">
                  <div className="column is-three-fifths is-offset-one-fifth">
                    {documentToReactComponents(edge.node.description.json)}
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </section>

      {/* Contact Form */}
      <section className="section has-text-centered" id="contact">
        <div className="section-heading">
          <h3 className="title is-2">Contact</h3>
        </div>
        <section className="section">
          <div className="container">
            <ContactForm />
          </div>
        </section>
      </section>
    </Layout>
  )
}
