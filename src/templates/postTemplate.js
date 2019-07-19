import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Post from '../components/post'
import SEO from '../components/seo'

const PostTemplate = ({ data, location }) => {
  const { markdownRemark } = data

  return (
    <Layout location={location}>
      <SEO title={markdownRemark.frontmatter.title} />
      <div className="posts">
        <Post data={markdownRemark} />
      </div>
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
      }
    }
  }
`

export default PostTemplate
