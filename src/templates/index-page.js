import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import React from "react";
import { HTMLContent } from "../components/Content";
import { Heading } from "../components/Heading";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({
	image,
	title,
	subheading,
	content,
	file,
}) => (
	<div>
		<BackgroundImage
			fluid={image?.childImageSharp?.fluid}
			style={{ padding: "10vh 0" }}>
			<div className="section">
				<div className="container">
					<div className="columns">
						<div className="column is-two-thirds">
							<div className="semi-box dark">
								<Heading title={title} className="is-size-1 is-uppercase" />
								{subheading}
								<br />
								<br />
								<div>
									<a
										className="button is-primary"
										href="https://newhorizonsfoundation.com/projectsdonate/2068-j-n-rwanda-faith-academy/backing"
										target="_blank"
										rel="noopener noreferrer">
										Donate Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</BackgroundImage>
		<section className="section section--gradient">
			<div className="container">
				<div className="section">
					<div className="content">
						<div className="columns">
							<div className="column is-half">
								<Img
									fluid={file?.childImageSharp?.fluid}
									alt="Homepage"
								/>
							</div>
							<div className="column is-half">
								<Heading title="Donate Now"></Heading>
								<HTMLContent content={content} />
								<br />
								<div>
									<a
										className="button is-primary is-medium"
										href="https://newhorizonsfoundation.com/projectsdonate/2068-j-n-rwanda-faith-academy/backing"
										target="_blank"
										rel="noopener noreferrer">
										Donate Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
	heading: PropTypes.string,
	subheading: PropTypes.string,
	mainpitch: PropTypes.object,
	description: PropTypes.string,
	intro: PropTypes.shape({
		blurbs: PropTypes.array,
	}),
};

const IndexPage = ({ data }) => {
	const { markdownRemark, file } = data;
	const { frontmatter, html } = markdownRemark;

	console.log(file);

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
				content={html}
				file={file}
			/>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		file(relativePath: { eq: "photos/home.jpg" }) {
			childImageSharp {
				fluid(maxHeight: 400, quality: 50) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			html
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 80, grayscale: true) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				subheading
			}
		}
	}
`;
