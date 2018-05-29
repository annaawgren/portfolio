import React from "react"
import { Link } from "react-router-dom"
import "./lab.css"


import babycorner from "../../images/babyincorner.jpg"


class Lab extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      contactVisible: false,
      explainerVisible: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleContactClick = () => {
    this.setState({ contactVisible: !this.state.contactVisible })
  }

  handleExplainerClick = () => {
    this.setState({ explainerVisible: !this.state.explainerVisible })
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

        <div className="work-headline-box">
            <h1 className="work-headline">Lab</h1>

            <div className="work-headline-explainer">
              <div onClick={this.handleExplainerClick} className="work-headline-star">*</div>
              <div className={`explainer ${this.state.explainerVisible ? "visible" : "hidden"}`}>
                <p>Explorations in creative tech, experience design and random ideas.</p>
              </div>
            </div>
        </div>

        <div class="grid-container">
          <div class="item1">c</div>
          <div class="item2">o</div>
          <div class="item3">m</div>
          <div class="item4">i</div>
          <div class="item5">n</div>
          <div class="item6">g</div>
          <div class="item7">.</div>
          <div class="item7">s</div>
          <div class="item8">o</div>
          <div class="item5">o</div>
          <div class="item6">n</div>
        </div>

      </div>
    )
  }

}

export default Lab
