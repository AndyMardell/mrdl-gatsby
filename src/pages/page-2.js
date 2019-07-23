import React from 'react'
import FadeLink from '../transitions/fade'
import SEO from '../components/seo'
import Layout from '../layouts'
import PropTypes from 'prop-types'

const SecondPage = ({ location }) => (
  <Layout location={location} hero='Page 2, yo'>
    <SEO title="Page two" />
    <p>Welcome to page 2</p>
    <FadeLink to="/">Go back to the homepage</FadeLink>
  </Layout>
)

SecondPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default SecondPage
