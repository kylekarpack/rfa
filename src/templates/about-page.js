import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import { Heading } from '../components/Heading'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({ post, contentComponent }) => {

  const { title, subheading } = post.frontmatter;
  const content = post.html;

  const PageContent = contentComponent || Content;

  return (
    <div>
      <div className="title-area">
        <div className="section">
          <div className="container">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
          </div>
        </div>
      </div>

      <section className="section section--gradient">

        <div className="container">
          <div className="columns content">

            <div className="column is-two-thirds">
              {subheading ? <Heading title={subheading}></Heading> : null}
              <PageContent content={content} />
            </div>

            <div className="column is-one-third">
              <Heading title="ALEXIS' STORY"></Heading>
              <iframe src="https://player.vimeo.com/video/189244318?color=ffffff&byline=0&portrait=0" style={{ width: "100%" }} height="300" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen title="Alexis' story"></iframe>
            </div>

          </div>
        </div>
      </section>

      <section className="section" style={{ background: "url(/img/img1.jpg) no-repeat center / cover" }}>
        <div className="container">
          <div className="content">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="semi-box">
                  <Heading title="Donate to Rwanda Faith Academy"></Heading>

                  Clicking below will take you to the&#xA0;New Horizons website where you can make a secure donation to the Rwanda Faith Academy
                  <br />
                  <br />

                  <a
                    className="button is-primary"
                    href="https://newhorizonsfoundation.com/project/single-project/1793/"
                    target="_blank"
                    rel="noopener noreferrer">Donate </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  post: PropTypes.object,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        post={post}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
      }
    }
  }
`
