import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/seo'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <p>Welcome to page 2</p>
    <AniLink fade to="/">Go back to the homepage</AniLink>
  </>
)

export default SecondPage
