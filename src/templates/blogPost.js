import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const BlogPost = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
    renderMark: {
      [MARKS.CODE]: code => {
        return <pre className="code-snippet">{code}</pre>
      },
    },
  }

  return (
    <Layout>
      <div className="text-4xl text-theme-primary">
        {data.contentfulBlogPost.title}
      </div>
      <div className="text-xl text-text-secondary">
        {data.contentfulBlogPost.publishedDate}
      </div>
      <div className="text-xl text-text-primary max-w-4xl">
        {documentToReactComponents(
          JSON.parse(data.contentfulBlogPost.body.raw),
          options
        )}
      </div>
    </Layout>
  )
}

export default BlogPost
