import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SkillsSection from "../components/skillsSection"

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
                <SkillsSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section has-text-centered" id="projects">
        <div className="section-heading">
          <h3 className="title is-2">Recent Projects</h3>
        </div>
        {allContentfulRecentProjects.edges.map(edge => {
          return (
            <section
              className="section has-text-centered"
              id={`${edge.node.name.split(" ").join("")}`}
            >
              <div className="section-heading">
                <h3 className="title is-3">{edge.node.name}</h3>
                {edge.node.languageAndTechnologies.map(name => {
                  return (
                    <span className="tag subtitle" key={name}>
                      {name}
                    </span>
                  )
                })}
                <div className="container">
                  <div class="columns is-mobile">
                    <div class="column is-three-fifths is-offset-one-fifth">
                      {documentToReactComponents(edge.node.description.json)}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </section>
    </Layout>
  )
}
