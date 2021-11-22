import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logo from "../images/logo-designcode.svg"
import "./header.css"

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      hasScrolled: false,
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if(scrollTop > 50){
      this.setState({hasScrolled: true});
    } else {
      this.setState({hasScrolled: false});
    }
  }

  render(){
    return(
      <div>
        <div className={this.state.hasScrolled ? 'header header-scrolled' : 'header'}>
          <div className="header-group">
            <Link to="/"> <img src={logo} width="30" /></Link>
            <Link to="/story">The Story</Link>
            <Link to="/the-world">The World</Link>
            <Link to="/the-collection">The Collection</Link>
            <Link to="/the-team">The Team</Link>
            <Link to="/buy"><button>Buy</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
