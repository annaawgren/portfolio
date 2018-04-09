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
              <h1 className="portfolio-headline">Anna Ågren</h1>
              <h1 className="portfolio-headline">art director</h1>
              <h1 className="portfolio-headline">digital designer</h1>
              <h1 className="portfolio-headline">frontend developer</h1>
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
            <div className="links-txt">mail</div>
            <div className="links-txt">phone</div>
            <div className="links-txt">p</div>
            <div className="links-txt">ln</div>

          </div>





        </div>
      </div>
    )
  }

}

export default Home
