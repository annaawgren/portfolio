import React from "react"
import { Link } from "react-router-dom"
import "./work.css"

import kivra from "../../images/sevenday-phone.jpg"
import test from "../../images/test.png"
import tictail from "../../images/tictail-phone.jpg"
import sr from "../../images/sr-laptop.jpg"
import fullstack from "../../images/fullstack.gif"
import background from "../../images/background.jpg"


class Work extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contactVisible: false
    }
  }

  handleContactClick = () => {
    this.setState({ contactVisible: !this.state.contactVisible })
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
              <div onClick={this.handleContactClick} className="navlink-txt contact">Work</div>
              <div className={`contact-info ${this.state.contactVisible ? "visible" : "hidden"}`}>
                +46 70 713 54 91 <br /> <a href="mailto:info@annaagren.se">hello@annaagren.io</a> </div>
            </div>
        </div>

        <div className="about-mywork-txt">
          <span> frontend development
          <br /> && digital design</span>
        </div>

        <div className="work-container">

          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box img" src={kivra} /></div>
            </div>

            <div className="work-box--info">
              <p>Case: Build a habittracker</p>
              <p>Client: Kivra</p>
              <p>Techniques used: React, JSX, CSS</p>
              <p>Skills learned: Callback functions</p>
            </div>
          </div>

          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box img" src={sr} /></div>
            </div>
            <div className="work-box--info">
              <p>Case: Build a habittracker</p>
              <p>Client: Kivra</p>
              <p>Techniques used: React, JSX, CSS</p>
              <p>Skills learned: Callback functions</p>
            </div>
          </div>

          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box img" src={fullstack} /></div>
            </div>
            <div className="work-box--info">
              <p>Case: Build a habittracker</p>
              <p>Client: Kivra</p>
              <p>Techniques used: React, JSX, CSS</p>
              <p>Skills learned: Callback functions</p>
            </div>
          </div>

          <div className="work-box-container">
            <div className="work-box">
              <div> <img className="work-box" src={tictail} /></div>
            </div>
            <div className="work-box--info">
              <p>Case: Build a habittracker</p>
              <p>Client: Kivra</p>
              <p>Techniques used: React, JSX, CSS</p>
              <p>Skills learned: Callback functions</p>
            </div>
          </div>


        </div>

      </div>
    )
  }

}

export default Work
