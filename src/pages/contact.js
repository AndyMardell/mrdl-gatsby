import React from 'react'
import SEO from '../components/seo'
import Layout from '../layouts'
import PropTypes from 'prop-types'

const Contact = ({ location }) => (
  <Layout location={location} hero='Get in touch'>
    <SEO title='Contact' />
    <nav className='u-align--center  u-font--large  u-margin--large'>
      <ul>
        <li><a target='_blank' rel='noopener noreferrer' href='mailto:andy@mardell.me'>email &rarr; andy@mardell.me</a></li>
        <li><a target='_blank' rel='noopener noreferrer' href='https://github.com/AndyMardell'>github &rarr; AndyMardell</a></li>
        <li><a target='_blank' rel='noopener noreferrer' href='https://twitter.com/AndyMardell'>twitter &rarr; @AndyMardell</a></li>
        <li><a target='_blank' rel='noopener noreferrer' href='https://instagram.com/AndyMardell'>instagram &rarr; @AndyMardell</a></li>
      </ul>
    </nav>
  </Layout>
)

Contact.propTypes = {
  location: PropTypes.object.isRequired
}

export default Contact
