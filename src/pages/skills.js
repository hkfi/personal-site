import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { DiJavascript1, DiDart, DiGo, DiPython, DiRuby } from "react-icons/di"

export default () => {
  const { allContentfulSkills } = useStaticQuery(graphql`
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
      <div className="text-5xl text-text-primary">Skills</div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-xl text-text-primary text-center">
          I mostly use technologies around JavaScript, TypeScript and Node.js
          but I also have some experience with the things listed here.
        </div>
        <div className="text-4xl text-text-primary text-center">
          Programming Languages
        </div>
        <div className="flex text-6xl text-text-primary">
          <DiJavascript1 className="hover:text-text-secondary" />
          <DiDart className="hover:text-text-secondary" />
          <DiGo className="hover:text-text-secondary" />
          <DiPython className="hover:text-text-secondary" />
          <DiRuby className="hover:text-text-secondary" />
        </div>
        <div className="text-4xl text-text-primary">
          Frameworks / Libraries / Tools
        </div>
        <div className="w-3/5 flex flex-wrap text-text-primary justify-center">
          {allContentfulSkills.edges.map(edge => {
            return (
              <div
                className="rounded m-1 p-1 bg-background-secondary text-text-primary"
                key={edge.node.name}
              >
                {edge.node.name}
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
