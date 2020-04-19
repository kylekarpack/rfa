import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'

const PeoplePage = ({ data }) => {

	const { people, title } = data.markdownRemark.frontmatter;

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
						{people.map(person => 
							<div className="column is-one-quarter">
								<div className="card">
									<div className="card-image">
										<Img fluid={person.image.childImageSharp.fluid} alt={person.name} />
									</div>
									<div className="card-content">
										<p className="title is-4">{person.name}</p>
										<p className="subtitle is-6">{person.role}</p>
										<div className="content">
											<p>
												{person.text}
											</p>
											<ul>
												{person.info && person.info.map(info => 
													<li>{info}</li>
												)}
											</ul>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

		</Layout>
	)
}

PeoplePage.propTypes = {
	data: PropTypes.object.isRequired,
}

export default PeoplePage

export const peoplePageQuery = graphql`
  query PeoplePage ($id: String!) {
    markdownRemark(id: { eq: $id }) {
		frontmatter {
			title	
			people {
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
				name
				role
				info
			}
		  }
    }
  }
`
