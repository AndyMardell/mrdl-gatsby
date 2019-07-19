import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PropTypes from 'prop-types'

const SecondPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Page two" />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

SecondPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default SecondPage
