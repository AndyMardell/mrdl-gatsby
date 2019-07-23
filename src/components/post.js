import React from 'react'
import PropTypes from 'prop-types'
import FadeLink from '../transitions/fade'

const Post = ({ data, archive }) => (
  <div className='post'>
    {archive &&
      <>
        <span className='post__meta'>{data.frontmatter.date} – {data.fields.readingTime.text}</span>
        <h3 className='post__title link'>
          <FadeLink to={data.frontmatter.path}>{data.frontmatter.title}</FadeLink>
        </h3>
      </>
    }
    <div
      className="post__content"
      dangerouslySetInnerHTML={{ __html: archive ? data.excerpt : data.html }}
    />
    {archive &&
      <FadeLink className='link' to={data.frontmatter.path}>Read more &rarr;</FadeLink>
    }
  </div>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
  archive: PropTypes.bool
}

export default Post
