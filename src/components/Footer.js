import React from 'react'

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer has-background-black has-text-white-ter">
				<div className="has-text-centered">Copyright {new Date().getFullYear()} Rwanda Faith Academy<br /><br /></div>
			</footer>
		)
	}
}

export default Footer
