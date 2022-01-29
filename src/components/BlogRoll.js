import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Heading } from './Heading'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent" key={post.id}>
              <article
                className={`blog-list-item box ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                  }`}
              >
                <header className="is-full">

                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      <Heading title={post.frontmatter.title} />
                    </Link>
                    <br />
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <div>
                  <div className="columns">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail column is-one-quarter">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                    ) : null}
                    <div className="column is-three-quarters">
                      {post.excerpt}
                    </div>
                  </div>
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`query BlogRollQuery {
  allMarkdownRemark(
    sort: {order: DESC, fields: [frontmatter___date]}
    filter: {frontmatter: {templateKey: {eq: "blog-post"}}}
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          featuredpost
          featuredimage {
            childImageSharp {
              gatsbyImageData(
                width: 300
                quality: 50
                placeholder: TRACED_SVG
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  }
}
`}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
