import React from 'react'

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer has-background-black has-text-white-ter has-text-centered">
				<small className="is-uppercase has-text-weight-light is-size-7">
					<span className="has-text-grey-light">
						© Copyright {new Date().getFullYear()}
					</span>
					&nbsp;
					Rwanda Faith Academy
				</small>
			</footer>
		)
	}
}

export default Footer
