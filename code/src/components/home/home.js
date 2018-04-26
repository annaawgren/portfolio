import React from "react"
import Header from "../header/header"
import "./home.css"

import anna from "../../images/anna.jpg"
import facebook from "../../images/facebook.jpg"
import insta from "../../images/insta.jpg"
import pinterest from "../../images/pinteres.jpg"
import linkedin from "../../images/ln.jpg"
import github from "../../images/github.jpg"


class Home extends React.Component {



  render() {
    return (
      <div className="background">

        <Header />

        <div className="title-container">
          <div> <p className="hero-txt"> art director</p></div>
          <div> <p className="hero-txt"> digital designer</p></div>
          <div><p className="hero-txt"> + frontend <br/> developer</p></div>
        </div>

        <div className="invisible-scroll-arrow" />

        <div className="social-links-container">
          <div className="social-links"> <a href="https://www.linkedin.com/in/anna-%C3%A5gren-7abb445a/"> <img className="ln-logo" src={linkedin} /></a></div>
          <div className="social-links"> <a href="https://www.pinterest.se/agren0088/"><img className="pinterest-logo" src={pinterest} /></a></div>
          <div className="social-links"> <a href="https://github.com/annaawgren"> <img className="github-logo" src={github} /></a></div>
          <div className="social-links"> <a href="https://www.instagram.com/annaawgren/"><img className="insta-logo" src={insta} /></a></div>
        </div>

        <div className="about-container">
          <div><img className="anna-img" src={anna} /></div>
          <div className="about-text">
            Hey! I’m a strategic, creative and always curious art director / digital designer with frontend developer skills.
            I now study Frontend Development at Technigo Boot Camp, graduating May 2018 and Design Lead (aka Interactive art director)
            at Hyper Island, graduating June 2018 – to sharpen my skills and take a step into the tech world.
            I’m all about creating awesome and meaningful products, tools and experiences – on internet, IRL and paper – for people to love!
          </div>
        </div>

    </div>
    )
  }

}

export default Home
