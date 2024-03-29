import React from 'react'
import SEO from '../components/seo'
import Layout from '../layouts'
import PropTypes from 'prop-types'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default NotFoundPage
