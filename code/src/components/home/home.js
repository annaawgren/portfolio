import React from "react"
import "./home.css"
import anna from "../../images/anna.jpg"
import facebook from "../../images/facebook.jpg"
import insta from "../../images/insta.jpg"
import pinterest from "../../images/pinteres.jpg"
import linkedin from "../../images/ln.jpg"
import github from "../../images/github.jpg"
import scroll from "../../images/scroll.png"


class Home extends React.Component {

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
      <div className="background">
        <div className="header-container">
          <div className="navlink-txt">Anna Ågren</div>
          <div onClick={this.handleContactClick} className="navlink-txt contact">Contact</div>
          <div className={`contact-info ${this.state.contactVisible ? "visible" : "hidden"}`}>+46 70 713 54 91 <br /> info@annaagren.se </div>
        </div>

        <div className="hero-text-container">
          <div>
            <p className="hero-txt"> art director</p>
          </div>
          <div>
            <p className="hero-txt"> digital designer</p>
          </div>
          <div>
            <p className="hero-txt"> + frontend <br/> developer  </p>
          </div>
        </div>

        <div className="invisible-scroll-arrow" />

        <div className="social-links-container">
          <div className="social-links">
              <img className="ln-logo" src={linkedin} />
          </div>
          <div className="social-links">
            <img className="pinterest-logo" src={pinterest} />
          </div>
          <div className="social-links">
            <img className="github-logo" src={github} />
          </div>
          <div className="social-links">
            <img className="insta-logo" src={insta} />
          </div>
        </div>

        <div className="about-container">
          <div>
            <img className="anna-img" src={anna} />
          </div>
          <div className="about-text">
            I’m a strategic, creative and always curious art director / digital designer with frontend developer skills.
            I now study Frontend Development at Technigo Boot Camp, graduating May 2018 and Design Lead (aka Interactive art director)
            at Hyper Island, graduating June 2018 – to sharpen my skills and take a step into the tech world. I’m all about creating awesome and meaningful products, tools and experiences – on internet, IRL and paper – for people to love!
          </div>
        </div>

    </div>
    )
  }

}

export default Home
