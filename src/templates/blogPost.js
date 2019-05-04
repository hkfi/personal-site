import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogPost = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <section className="section">
        <h1 className="title is-3 has-text-centered">
          {props.data.contentfulBlogPost.title}
        </h1>
        <p className="is-size-6 has-text-centered">
          {props.data.contentfulBlogPost.publishedDate}
        </p>
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth">
            <p className="is-size-5">
              {documentToReactComponents(
                props.data.contentfulBlogPost.body.json,
                options
              )}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogPost
