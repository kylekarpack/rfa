import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'

const PhotosPage = ({ data }) => {

  const fullSize = data.images.edges.map((edge) => edge.node.full.fluid.src)
  const thumbs = data.images.edges.map((edge) => edge.node.thumb.fluid)

  return (
    <Layout>
      <div className="title-area">
        <div className="section">
          <div className="container">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              Photos
            </h2>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <Gallery images={fullSize} thumbs={thumbs} />
        </div>
      </div>
    </Layout>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PhotosPage

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          thumb: childImageSharp {
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG 
            }
          }
          full: childImageSharp {
            fluid(
              maxWidth: 1024
              quality: 85
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG 
            }
          }
        }
      }
    }
  }
  `
