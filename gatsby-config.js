module.exports = {
  siteMetadata: {
    title: `mrdl`,
    description: `A gatsby site for mardell.me`,
    author: `@AndyMardell`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layouts/wrapper.js`)
      }
    },
    {
      resolve: `gatsby-plugin-stylus-resources`,
      options: {
        resources: [
          './src/css/config/*'
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/pages/posts`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F7D374`,
        theme_color: `#F7D374`,
        display: `minimal-ui`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- readmore -->`,
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ]
            }
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                intro: {
                  classes: 'post__intro'
                }
              }
            }
          }
        ]
      }
    }
    // `gatsby-plugin-offline`
  ]
}
