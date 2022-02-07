import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import Layout from "../components/Layout";

const PeoplePage = ({ data }) => {
  let { people, title, columnWidth } = data.markdownRemark.frontmatter;

  columnWidth = columnWidth || "is-one-quarter";

  return (
    <Layout>
      <div className="title-area">
        <div className="section">
          <div className="container">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            {people.map((person, i) => (
              <div className={`column ${columnWidth}`} key={i}>
                <div className="card">
                  <div className="card-image">
                    <GatsbyImage
                      image={person.image.childImageSharp.gatsbyImageData}
                      alt={person.name}
                    />
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{person.name}</p>
                        <p className="subtitle is-6">{person.role}</p>
                      </div>
                    </div>
                    <div className="content">
                      <p>{person.text}</p>
                      <ul>
                        {person.info &&
                          person.info.map((info, i) => <li key={i}>{info}</li>)}
                      </ul>
                      {person.button ? (
                        <a
                          className="button is-primary is-outlined"
                          href={person.button.link}
                          target="_blank"
                          rel="noopener noreferrer">
                          {person.button.text}
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

PeoplePage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PeoplePage;

export const peoplePageQuery = graphql`
  query PeoplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        columnWidth
        people {
          image {
            childImageSharp {
              gatsbyImageData(
                height: 400
								width: 400
                quality: 50
                placeholder: BLURRED
                layout: CONSTRAINED
								transformOptions: {
									cropFocus: NORTH
								}
              )
            }
          }
          name
          role
          info
          text
          button {
            text
            link
          }
        }
      }
    }
  }
`;
