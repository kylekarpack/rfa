import { graphql, StaticQuery } from "gatsby";
import { BgImage } from "gbimage-bridge";
import React from "react";
import BlogRoll from "../../components/BlogRoll";
import { Heading } from "../../components/Heading";
import Layout from "../../components/Layout";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <StaticQuery
          query={graphql`
            {
              file(publicURL: { regex: "/.*blog-index./" }) {
                childImageSharp {
                  gatsbyImageData(quality: 60, layout: FULL_WIDTH)
                }
              }
            }
          `}
          render={(data) => {
            const imageData = data.file.childImageSharp.gatsbyImageData;
            return (
              <BgImage
                Tag="section"
                image={imageData}
                backgroundColor={`rgba(69, 148, 170, 0.8)`}
                style={{ padding: "10vh 0" }}>
                <div className="container">
                  <div
                    className="has-text-weight-bold is-size-1"
                    style={{
                      backgroundColor: "rgba(69, 148, 170, 0.8)",
                      padding: "1rem",
                    }}>
                    <Heading
                      title="Rwanda Faith Academy Blog"
                      className="is-size-1"
                      style={{ margin: 0, color: "#fff" }}></Heading>
                  </div>
                </div>
              </BgImage>
            );
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
    );
  }
}
