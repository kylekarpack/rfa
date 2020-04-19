import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import { Heading } from '../../components/Heading'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
            backgroundPosition: "top center",
            padding: "10vh 0"
          }}
        >
          <div className="container">
            <div
              className="has-text-weight-bold is-size-1"
              style={{
                backgroundColor: 'rgba(69, 148, 170, 0.8)',
                padding: '1rem',
              }}
            >
              <Heading title="Rwanda Faith Academy Blog" className="is-size-1" style={{ margin: 0, color: "#fff" }}></Heading>
          </div>
          </div>
        </div>
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
