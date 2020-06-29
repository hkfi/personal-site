import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="text-text-primary text-5xl">Blog</div>

      {data.allContentfulBlogPost.edges.map((edge, i) => {
        return (
          <AniLink
            fade
            className="w-full max-w-4xl flex m-2 p-2 text-text-primary hover:text-theme-primary justify-between bg-background-secondary"
            to={`/blog/${edge.node.slug}`}
            key={i}
          >
            <div className="text-3xl">{edge.node.title}</div>
            <div className="text-2xl">{edge.node.publishedDate}</div>
          </AniLink>
        )
      })}
    </Layout>
  )
}
