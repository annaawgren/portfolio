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
          <div class="item1">1
            {/* <img src={babycorner} alt="baby" /> */}
          </div>
          <div class="item2">2</div>
          <div class="item3">3</div>
          <div class="item4">4</div>
          <div class="item5">5</div>
          <div class="item6">6</div>
          <div class="item7">7</div>
          <div class="item8">8</div>
          <div class="item5">9</div>
          <div class="item6">10</div>
          <div class="item7">11</div>
          <div class="item8">12</div>
        </div>

      </div>
    )
  }

}

export default Lab
