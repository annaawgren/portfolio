import React from "react"
import { Link } from "react-router-dom"

import "./home.css"

import anna from "../../images/anna.jpg"
import facebook from "../../images/facebook.jpg"
import insta from "../../images/insta.jpg"
import pinterest from "../../images/pinteres.jpg"
import linkedin from "../../images/ln.jpg"
import github from "../../images/github.jpg"
import heart from "../../images/heart.png"


class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      heartVisible: false,
      contactVisible: false
    }
  }

  handleHeartClick = () => {
    this.setState({ heartVisible: !this.state.heartVisible })
  }

  handleContactClick = () => {
    this.setState({ contactVisible: !this.state.contactVisible })
  }

  render() {
    return (
      <div className="background">

        <div className="header-container">
            <div className="navlink-txt-anna"><Link to="/">Anna Ågren</Link></div>

            <div className="contact-container">
              <div onClick={this.handleContactClick} className="navlink-txt contact">Contact</div>
              <div className={`contact-info ${this.state.contactVisible ? "visible" : "hidden"}`}>
                +46 70 713 54 91 <br /> <a href="mailto:info@annaagren.se">hello@annaagren.io</a> </div>
            </div>
        </div>

        <div className="title-container">
          <div> <p className="hero-txt"> art director</p></div>
          <div> <p className="hero-txt"> digital designer</p></div>
          <div><p className="hero-txt"> + frontend <br/> developer</p></div>
        </div>

        <div className="heart-container">
          <div onClick={this.handleHeartClick}>
            <img className="heart-img" src={heart} />
          </div>
          <div className={`heart-info ${this.state.heartVisible ? "visible" : "hidden"}`}>
            Yes! I love <br /> design, new technology, coding <br />  and music. And mountains.
          </div>
        </div>

        <div className="invisible-scroll-arrow" />

        <div className="social-links-container">
          <div className="social-links"> <a href="https://www.linkedin.com/in/anna-%C3%A5gren-7abb445a/" target="blank"> <img className="ln-logo" src={linkedin} /></a></div>
          <div className="social-links"> <a href="https://www.pinterest.se/agren0088/" target="blank"><img className="pinterest-logo" src={pinterest} /></a></div>
          <div className="social-links"> <a href="https://github.com/annaawgren" target="blank"> <img className="github-logo" src={github} /></a></div>
          <div className="social-links"> <a href="https://www.instagram.com/annaawgren/" target="blank"><img className="insta-logo" src={insta} /></a></div>
        </div>

        <div className="about-container">
          <div><img className="anna-img" src={anna} /></div>
          <div className="about-text">
            <p> Hello! I’m a strategic and creative senior art director/
            digital designer with frontend developer skills
            and experience design at <span className="red">&lt;3</span>. I'm all about solving problems that matter and
            creating awesome, meaningful products for people to love. </p>
          </div>
        </div>

    </div>
    )
  }

}

export default Home
