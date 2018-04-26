import React from "react"
import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contactVisible: false
    }
  }

  handleContactClick = () => {
    this.setState({ contactVisible: !this.state.contactVisible })
  }

  render() {
    return (
      <div className="header-container">
          <div className="navlink-txt">Anna Ågren</div>

          <div className="contact-container">
            <div onClick={this.handleContactClick} className="navlink-txt contact">Contact</div>
            <div className={`contact-info ${this.state.contactVisible ? "visible" : "hidden"}`}>+46 70 713 54 91 <br /> <a href="mailto:info@annaagren.se">info@annaagren.se</a> </div>
          </div>
      </div>
    )
  }
}

export default Header
