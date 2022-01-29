import Gallery from "@browniebroke/gatsby-image-gallery";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";

const PhotosPage = ({ data }) => {
  const images = data.images.edges.map((edge) => edge.node.childImageSharp);

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
          <Gallery images={images} />
        </div>
      </div>
    </Layout>
  );
};

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PhotosPage;

export const query = graphql`
  query ImagesForGallery {
    images: allFile(
      filter: { relativeDirectory: { eq: "gallery" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: TRACED_SVG
            )
            full: gatsbyImageData(
              quality: 60,
              width: 600,
              layout: FULL_WIDTH,
              formats: [WEBP, AUTO]
            )
          }
        }
      }
    }
  }
`;
