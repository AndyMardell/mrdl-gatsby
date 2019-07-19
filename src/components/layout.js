import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../css/app.styl'

const Layout = ({ children, location, hero }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={site.siteMetadata.title}
        location={location}
        hero={hero}
      />
      <div className='main-container'>
        <main>{children}</main>
        <footer>
          &copy; {new Date().getFullYear()} Andy Mardell
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  hero: PropTypes.string
}

export default Layout
