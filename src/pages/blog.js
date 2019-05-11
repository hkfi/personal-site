import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

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
      <section className="section has-text-centered">
        <div className="section-heading">
          <h3 className="title is-2">Blog</h3>
          <div className="columns is-mobile">
            <div className="column is-three-fifths is-offset-one-fifth">
              {data.allContentfulBlogPost.edges.map((edge, i) => {
                return (
                  <Link to={`/blog/${edge.node.slug}`} key={i}>
                    <div className="blog-list-card">
                      <div className="level">
                        <div className="level-left">
                          <span className="subtitle is-3">
                            {edge.node.title}
                          </span>
                        </div>
                        <div className="level-right">
                          <span className="subtitle is-5">
                            {edge.node.publishedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
