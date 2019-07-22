import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'
import '../css/app.styl'

const Layout = ({ children, location }) => (
  <>
    <Header location={location} />
    <main>
      {children}
      <Footer />
    </main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default Layout
