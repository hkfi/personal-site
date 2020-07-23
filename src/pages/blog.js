import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import { PageTitle } from "../components/pageTitle"
import { sr, srConfig } from "../utils/sr"

export default () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
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

  const revealBlogPosts = useRef([])
  useEffect(() => {
    revealBlogPosts.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    )
  }, [])

  return (
    <Layout>
      <PageTitle title={"Blog"} />

      {allContentfulBlogPost.edges.map((edge, i) => {
        return (
          <div
            key={i}
            ref={el => (revealBlogPosts.current[i] = el)}
            className="w-full max-w-4xl flex m-2 bg-background-secondary"
          >
            <AniLink
              fade
              to={`/blog/${edge.node.slug}`}
              className="w-full h-full flex p-4 justify-between bg-background-secondary"
            >
              <div className="text-3xl">{edge.node.title}</div>
              <div className="text-2xl">{edge.node.publishedDate}</div>
            </AniLink>
          </div>
        )
      })}
    </Layout>
  )
}
