import React from "react"
import { Link } from "react-router-dom"
import "./work.css"

import kivra from "../../images/sevenday-phone.jpg"
import test from "../../images/test.png"
import tictail from "../../images/tictail-phone.jpg"
import sr from "../../images/sr-laptop.jpg"
import fullstack from "../../images/fullstack.gif"
import background from "../../images/background.jpg"
import vegogo from "../../images/vegogo.jpg"


class Work extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contactVisible: false,
      explainerVisible: false
    }
  }

  handleContactClick = () => {
    this.setState({ contactVisible: !this.state.contactVisible })
  }

  handleExplainerClick = () => {
    this.setState({ explainerVisible: !this.state.explainerVisible })
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="work-bg">

        <div className="header-container">
            <div className="navlink-txt-anna"><Link to="/">Anna Ågren</Link></div>

            <div className="contact-container">
              <div onClick={this.handleContactClick} className="navlink-txt contact">Contact</div>
              <div className={`contact-info ${this.state.contactVisible ? "visible" : "hidden"}`}>
                +46 70 713 54 91 <br /> <a href="mailto:info@annaagren.se">hello@annaagren.io</a> </div>
            </div>
        </div>

        <div className="work-headline-box">
            <h1 className="work-headline">Work</h1>

            <div className="work-headline-explainer">
              <div onClick={this.handleExplainerClick} className="work-headline-star">*</div>
              <div className={`explainer ${this.state.explainerVisible ? "visible" : "hidden"}`}>
                <p>A collection of things that I've done during my time at <a className="link-underline" href="https://www.hyperisland.com/programs-and-courses/design-lead" target="blank">Hyper Island </a>
                and <a className="link-underline" href="http://www.technigo.io/program" target="blank">Technigo</a>.</p>
              </div>
            </div>
        </div>

        <div className="work-container">

          <div className="work-box-container">
            <div className="work-box">
              <video className="video" autoPlay loop infinite="true" >
                <source src={require("../../images/dancePP.mp4")} type="video/mp4" alt="video" />
              </video>
            </div>
            <div className="work-box--info">
              <h3 className="work-box--info--headline">Interactive video projection</h3>
              <p>Personal project at Hyper Island</p>
              <p>Tools & Tech: Machine learning with Wekinator and projection done with
              Resolume Arena.</p>
              <p className="p-link-row">See more <a className="p-link" href="https://readymag.com/u11250101/975783/" target="blank">here</a> </p>
            </div>
          </div>

          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box img" src={vegogo} /></div>
            </div>
            <div className="work-box--info">
              <h3 className="work-box--info--headline">vegogo.se</h3>
              <p>Own project</p>
              <p>A curated, inspirational guide to the best vegan places to eat in Stockholm. Frontend + backend development, concept and digital design.</p>
              <p>Tools & Tech: React, API, JSX, CSS.</p>
              <p className="p-link-row">See more <a className="p-link" href="http://www.vegogo.se" target="blank">here</a> </p>
            </div>
          </div>

          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box img" src={kivra} /></div>
            </div>
            <div className="work-box--info">
              <h3 className="work-box--info--headline">7 day world save-app</h3>
              <p>Client: Kivra</p>
              <p>Case: Build a habittracker. Frontend development and digital design.</p>
              <p>Tools & Tech: React, JSX, CSS.</p>
              <p className="p-link-row">See more <a className="p-link" href="https://readymag.com/u11250101/975783/" target="blank">here</a> </p>
            </div>
          </div>


          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box img" src={sr} /></div>
            </div>
            <div className="work-box--info">
              <h3 className="work-box--info--headline">Radio Player</h3>
              <p>Project done at Technigo.</p>
              <p>Case: Build a radio player using Sveriges Radio API. Frontend development and digital design.</p>
              <p>Tools & Tech: React, API, JSX, CSS.</p>
              <p className="p-link-row">See more <a className="p-link" href="https://annaawgren.github.io/radio-player/" target="blank">here</a> </p>
            </div>
          </div>

          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box img" src={fullstack} /></div>
            </div>
            <div className="work-box--info">
              <h3 className="work-box--info--headline">Question & answer</h3>
              <p>Collab: Detectify.</p>
              <p>Case: Build a fullstack Q&A site. Frontend + backend development and digital design.</p>
              <p>Tools & Tech: React, NODE.js, MongoDB, JSX, CSS.</p>
              <p className="p-link-row">See more <a className="p-link" href="https://annaawgren.github.io/radio-player/" target="blank">here</a> </p>
            </div>
          </div>

          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box" src={tictail} /></div>
            </div>
            <div className="work-box--info">
              <h3 className="work-box--info--headline">Tictail webshop</h3>
              <p>Client: Tictail.</p>
              <p>Case: Build a webshop using Tictail API. Frontend development and digital design.</p>
              <p>Tools & Tech: React, API, JSX, CSS.</p>
              <p className="p-link-row">See more <a className="p-link" href="https://annaawgren.github.io/radio-player/" target="blank">here</a> </p>
            </div>
          </div>


        </div>

      </div>
    )
  }

}

export default Work
