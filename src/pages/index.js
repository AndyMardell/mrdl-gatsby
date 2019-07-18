import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Post from '../components/post'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <div className="blog-post-container">
        {edges.map(({ node }, i) =>
          <Post key={i} data={node} archive />
        )}
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
