import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/seo'
import Layout from '../layouts'
import PropTypes from 'prop-types'

const SecondPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Page two" />
    <p>Welcome to page 2</p>
    <AniLink fade to="/">Go back to the homepage</AniLink>
  </Layout>
)

SecondPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default SecondPage
