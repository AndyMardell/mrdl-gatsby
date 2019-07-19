import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Post from '../components/post'
import SEO from '../components/seo'

const IndexPage = ({ data, location }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <Layout location={location}>
      <SEO title="Andy Mardell: Portsmouth Web Developer" />
      <>
        {edges.map(({ node }, i) =>
          <Post key={i} data={node} archive />
        )}
      </>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
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
