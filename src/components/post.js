import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Post = ({ data, archive }) => (
  <div className='post'>
    {archive &&
      <>
        <span className='post__meta'>{data.frontmatter.date} – {data.fields.readingTime.text}</span>
        <h3 className='post__title link'>
          <AniLink fade to={data.frontmatter.path}>{data.frontmatter.title}</AniLink>
        </h3>
      </>
    }
    <div
      className="post__content"
      dangerouslySetInnerHTML={{ __html: archive ? data.excerpt : data.html }}
    />
    {archive &&
      <AniLink fade className='link' to={data.frontmatter.path}>Read more &rarr;</AniLink>
    }
  </div>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
  archive: PropTypes.bool
}

export default Post
