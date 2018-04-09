import React from "react"
import "./style.css"
import anna from "../../images/anna.jpg"

class Home extends React.Component {



  render() {
    return (
      <div className="background">


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

        <div className="social-links-container">
          <div className="links-txt"></div>
          <div className="links-txt"></div>
          <div className="links-txt"></div>
          <div className="links-txt"></div>
        </div>

        <div className="about-container">
          <div>
            <img className="anna-img" src={anna} />
          </div>
          <div className="title-headline">
            I’m a strategic, creative and always curious art director / digital designer with frontend developer skills.
            I now study Frontend Development at Technigo Boot Camp, graduating May 2018 and Design Lead (aka Interactive art director)
            at Hyper Island, graduating June 2018 – to sharpen my skills and take a step into the tech world.
          </div>
        </div>




    </div>
    )
  }

}

export default Home
