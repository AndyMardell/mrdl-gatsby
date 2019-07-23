import React, { useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Post from '../components/post'
import SEO from '../components/seo'
import Context from '../context'
import Layout from '../layouts'

const PostTemplate = ({ data, location }) => {
  const { markdownRemark } = data
  const [context, setContext] = useContext(Context)
  useEffect(() => setContext({ ...context, hero: markdownRemark.frontmatter.title }), [])

  return (
    <Layout location={location}>
      <SEO title={markdownRemark.frontmatter.title} />
      <Post data={markdownRemark} />
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
