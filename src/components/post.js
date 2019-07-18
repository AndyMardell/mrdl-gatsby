import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Post = ({ data, archive }) => (
  <div className="post">
    <h1>{data.frontmatter.title}</h1>
    <h2>{data.frontmatter.date}</h2>
    <div
      className="post__content"
      dangerouslySetInnerHTML={{ __html: archive ? data.excerpt : data.html }}
    />
    {archive &&
      <Link to={data.frontmatter.path}>Read more &rarr;</Link>
    }
  </div>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
  archive: PropTypes.bool
}

export default Post
