import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.jpg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" style={{ paddingTop: 0, paddingBottom: 0 }} title="Logo">
              <img src={logo} alt="Rwanda Faith Academy" style={{ width: '122px', height: "auto", maxHeight: "none" }} />
            </Link>
            {/* Hamburger menu */}
            <a href="#/"
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </a>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>

              <div className="navbar-item has-dropdown is-hoverable" to="/about">
                <Link className="navbar-link" to="/about">
                  About RFA
                </Link>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/about">
                    The RFA Story
                  </Link>
                  <Link className="navbar-item" to="/about/administrative">
                    Administrative Team
                  </Link>
                  <Link className="navbar-item" to="/about/faculty">
                    Faculty and Staff
                  </Link>
                  <Link className="navbar-item" to="/about/mission">
                    Mission and Vision
                  </Link>
                  <Link className="navbar-item" to="/about/testimonies">
                    Student Testimonies
                  </Link>
                </div>
              </div>
              <Link className="navbar-item" to="/fundraising-campaigns">
                Fundraising Campaigns
              </Link>
              <Link className="navbar-item" to="/photos">
                Photos
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <div className="navbar-item">
                <a
                  className="button is-primary"
                  href="https://newhorizonsfoundation.com/projectsdonate/2068-j-n-rwanda-faith-academy/backing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Donate Now
              </a>
              </div>
            </div>
          </div>
      </nav>
    )
  }
}

export default Navbar
