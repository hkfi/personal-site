import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
    <React.Fragment>
      <h1 className="subtitle is-3">Frameworks / Libraries / Tools</h1>
      {allContentfulSkills.edges.map(edge => {
        return (
          <span className="tag" key={edge.node.name}>
            {edge.node.name}
          </span>
        )
      })}
    </React.Fragment>
  )
}
