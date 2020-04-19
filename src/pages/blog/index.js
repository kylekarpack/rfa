import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import BlogRoll from '../../components/BlogRoll'
import { Heading } from '../../components/Heading'
import Layout from '../../components/Layout'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>

        <StaticQuery
          query={graphql`
            query {
              file(publicURL: {regex: "/.*blog-index./"}) { # ToDo: improve this query
                childImageSharp {
                  fluid(quality: 60, maxWidth: 2048) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => {
            const imageData = data.file.childImageSharp.fluid;
            return (
              <BackgroundImage
                Tag="section"
                fluid={imageData}
                backgroundColor={`rgba(69, 148, 170, 0.8)`}
                style={{padding: "10vh 0"}}>
                <div className="container">
                  <div
                    className="has-text-weight-bold is-size-1"
                    style={{
                      backgroundColor: 'rgba(69, 148, 170, 0.8)',
                      padding: '1rem',
                    }}>
                    <Heading title="Rwanda Faith Academy Blog" className="is-size-1" style={{ margin: 0, color: "#fff" }}></Heading>
                  </div>
                </div>
              </BackgroundImage>
            )
          }}
        />
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
