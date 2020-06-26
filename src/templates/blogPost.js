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
        json
      }
    }
  }
`

const BlogPost = props => {
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
      <div className="text-4xl text-text-primary">
        {props.data.contentfulBlogPost.title}
      </div>
      <div className="text-xl text-text-primary">
        {props.data.contentfulBlogPost.publishedDate}
      </div>
      <div className="text-xl text-text-primary max-w-4xl">
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default BlogPost
