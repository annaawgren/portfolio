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
            Yes! I love <br /> design, tech, coding <br />  and music. And mountains.
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
            <p> Hej! I’m a strategic and creative senior art director /
            digital designer with frontend developer skills who loves to put a
            lot of <span className="red">&lt;3</span> into all things I take on.
            I believe it makes everything better — and more fun. Yay! </p>
            <p> Three things that I love a little extra (beyond my four year old son, cross country skiing, cooking vegan food,
            learning new things, spending time in the mountains and listening to a lot of music) is:
            1. Design 2. Tech 3. To code. </p>
            <p>That’s why I’m currently adding to my 16 years of industry experience
            as a print art director by studying at both <a href="https://www.hyperisland.com/programs-and-courses/design-lead" target="blank"> <span className="callme-link">Hyper Island</span> </a>
            and <a href="http://www.technigo.io/program" target="blank"> <span className="callme-link">Technigo</span> </a>
            to be able to combine these three areas and become a digital uhm … wizard?
            Well, at least someone who’s good at both code & design!</p>

            <p>To get there I would love to junior as a web developer at a nice place that
            makes great things where I can learn as much development as possible.
            Need someone who is super pepp to learn, that you want to senior? Give me a <a className="callme-link" href="tel:+46707135491" target="blank">☎</a></p>
          </div>
        </div>

    </div>
    )
  }

}

export default Home
