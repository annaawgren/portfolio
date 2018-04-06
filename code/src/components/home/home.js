import React from "react"
import "./style.css"
import anna from "../../images/anna.jpg"
import Footer from "../footer/footer"

class Home extends React.Component {



  render() {
    return (
      <div>
        <div className="background">

          <div className="header-container">
            <div>
              <h1 className="portfolio-headline">hello</h1>
            </div>
          </div>

          <div className="hero-container">
            <div>
              <img className="anna-img" src={anna} />
            </div>
            <div className="title-headline">
              art director + digital designer + frontend developer
            </div>
          </div>

          <div className="social-links-container">
            <div>mail</div>
            <div>ln</div>
            <div>p</div>
            <div>mail</div>

          </div>





        </div>
      </div>
    )
  }

}

export default Home
