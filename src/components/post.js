import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Post = ({ data, archive }) => (
  <div className='post'>
    {archive &&
      <>
        <span className='post__meta'>{data.frontmatter.date}</span>
        <h3 className='post__title link'>
          <Link to={data.frontmatter.path}>{data.frontmatter.title}</Link>
        </h3>
      </>
    }
    <div
      className="post__content"
      dangerouslySetInnerHTML={{ __html: archive ? data.excerpt : data.html }}
    />
    {archive &&
      <Link className='link' to={data.frontmatter.path}>Read more &rarr;</Link>
    }
  </div>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
  archive: PropTypes.bool
}

export default Post
