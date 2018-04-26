import React from "react"
import "./about.css"

import Header from "../header/header"



class About extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="aboutpage-container">
          <div className="background-box">
            <p className="background-box--text"> My background is 15+ years of industry experience working as an art director within print.
            The last seven years I’ve been a full time freelance working as for example the art director
            for SJs onboard magazine Kupé and with redesigning and developing (award winning!) magazine concepts.
            I have also designed a lot of of books for a number of different publishing houses. </p>
          </div>
        </div>
      </div>
    )
  }

}

export default About
