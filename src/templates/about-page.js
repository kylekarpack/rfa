import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import { Heading } from '../components/Heading'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

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
              <Heading title="ABOUT RWANDA FAITH ACADEMY"></Heading>
              <PageContent content={content} />
            </div>

            <div className="column is-one-third">
              <Heading title="ALEXIS' STORY"></Heading>
              <iframe src="https://player.vimeo.com/video/189244318?color=ffffff&byline=0&portrait=0" style={{ width: "100%" }} height="300" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
            </div>

          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <Heading title="Donate to Rwanda Faith Academy"></Heading>

            Clicking below will take you to the&#xA0;New Horizons website where you can make a secure donation to the Rwanda Faith Academy
            <br />
            <br />

            <a
              className="button is-primary"
              href="https://newhorizonsfoundation.com/projectsdonate/2068-j-n-rwanda-faith-academy/backing"
              target="_blank"
              rel="noopener noreferrer"
            >Donate </a>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      }
    }
  }
`
