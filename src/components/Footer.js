import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.jpg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

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
