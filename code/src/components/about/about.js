import React from "react"
import { Link } from "react-router-dom"
import "./about.css"


class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundVisible: false,
      visionVisible: false,
      skillsVisible: false,
      educationVisible: false
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleBackgroundClick = () => {
    this.setState({ backgroundVisible: !this.state.backgroundVisible })
  }

  handleVisionClick = () => {
    this.setState({ visionVisible: !this.state.visionVisible })
  }

  handleSkillsClick = () => {
    this.setState({ skillsVisible: !this.state.skillsVisible })
  }

  handleEducationClick = () => {
    this.setState({ educationVisible: !this.state.educationVisible })
  }

  render() {
    return (
      <div>

        <div className="header-container">
            <div className="navlink-txt-anna"><Link to="/">Anna Ågren</Link></div>

            <div className="contact-container">
              <div className="navlink-txt">About</div>
            </div>
        </div>

        <div className="aboutpage-container">

          <div className="bg-box">
            <div className="bg-box--headline" onClick={this.handleBackgroundClick}>background</div>
            <div className={`bg-box-onclick ${this.state.backgroundVisible ? "visible" : "hidden"}`}>
              <p className="bg-box--text"> Born in Luleå but stockholmare since 1999.
              I have 16 years of industry experience working as a print art director.
              The last seven years I’ve been a full time freelance working as for example the art director
              for SJs onboard magazine Kupé and with redesigning and developing (award winning!) magazine concepts.
              I have also designed a lot of of books for a number of different publishing houses.
              Check out print portfolio <a className="print-link" href="http://www.annaagren.se" target="blank"> here </a>
              </p>
            </div>
          </div>

          <div className="bg-box">
            <div className="bg-box--headline" onClick={this.handleVisionClick}>vision + work</div>
            <div className={`bg-box-onclick ${this.state.visionVisible ? "visible" : "hidden"}`}>
              <p className="bg-box--text"> I love to put a lot of <span className="red">&lt;3</span>  into things I take on.
                I believe it makes everything better — and more fun. Yay! Three things that I love a little extra
                (beyond my four year old son, cross country skiing, cooking vegan food, learning new things,
                spending time in the mountains and listening to a lot of music) is 1. Design 2. Tech 3. Code.
                That's why I'm now studying at both Hyper Island and Technigo to become a digital … wizard?
                Well, at least someone who's great at both code & design! To get there I would love to junior
                as a web developer at a nice place that makes nice things where I can learn as much about coding as possible.
                Need someone you want to teach? <a className="callme-link" href="tel:+46707135491" target="blank">Give me a call!</a>

               </p>
            </div>
          </div>

          <div className="bg-box">
            <div className="bg-box--headline" onClick={this.handleSkillsClick}>skills + knowledge</div>
            <div className={`bg-box-onclick ${this.state.skillsVisible ? "visible" : "hidden"}`}>
              <div className="bg-box--skills-edu">

                <div className="bg-box--skills--contentbox">
                  <span className="skills--headline">tools</span>
                  <br /><br /> Indesign ••••• <br /> Photoshop •••• <br /> Keynote •••• <br /> Sketch ••• <br /> Figma ••• <br /> Illustrator •••
                  <br /> Webflow ••• <br /> InVision •• <br /> AfterEffects •• <br /> Arduino •• <br /> Resolume Arena ••
                </div>
                <div className="bg-box--skills--contentbox">
                  <span className="skills--headline">code</span>
                  <br /><br /> HTML5 ••• <br /> CSS3 ••• <br /> Javascript ••• <br /> JSX ••• <br /> React •••
                  <br /> SASS ••• <br /> Github ••• <br /> Node.js ••
                </div>
                <div className="bg-box--skills--contentbox">
                  <span className="skills--headline">design</span>
                  <br /><br /> Art direction <br /> Design lead <br /> Digital design <br /> Book design <br /> Magazine design
                  <br /> UX design <br /> Prototyping
                </div>
                <div className="bg-box--skills--contentbox">
                  <span className="skills--headline">more</span>
                  <br /><br /> Hyper Island Toolbox <br /> Branding <br /> Strategy <br /> Process design <br /> Concept development <br /> Agile methodology
                </div>

              </div>
            </div>
          </div>

          <div className="bg-box">
            <div className="bg-box--headline" onClick={this.handleEducationClick}>studies</div>
            <div className={`bg-box-onclick ${this.state.educationVisible ? "visible" : "hidden"}`}>
              <div className="bg-box--skills-edu">

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">Design Lead @ Hyper Island</span>
                  <br />Sthlm Aug. 2017 – Jun. 2018 <br /> Full-time program.
                  Full time program. Exploring user centered design, UX, interactive art direction, creative tech, business strategy, concept development, group dynamics and practicing self-leadership.
                </div>

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">Frontend developer @ Technigo</span>
                  <br />Sthlm Mar. - May.  2018 <br />
                  Full-time 12 w boot camp / intensive program. Covering everything from the basics of programming to how to structure and build bigger web projects. Focus on JavaScript. Total 480 coding hours, 50+ individual tasks (in HTML5, CSS, Javascript, JSX, React, Node.js) and 6 sprints with demos together with companies like Google, Kivra, Tictail and Detectify.

                </div>

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">HTML5 & CSS3 @ Tjejer kodar</span>
                  <br />Berlin Jun. 2017 <br /> 3 day intensive course. Build a portfolio in HTML&CSS
                </div>

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">Social Video @ Berghs SOC</span>
                  <br />Sthlm Mar. 2017 <br /> Visual storytelling in social media, creative filming. Foundations in lightning and sound. Cut, edit and export for different platforms. Strategy for social video
                </div>

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">UX/UI Design @ Berghs SOC</span>
                  <br />Sthlm Feb. - Mar. 2017 <br /> 8 v online course.Covering the foundations UX/UI design. Human centered design, design patterns and mobile first. Iconography, wireframes and iterations. Design an app + responsive webpage.
                </div>

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">Copywriting @ Berghs SOC</span>
                  <br />Sthlm spring 2009 <br /> 10 v evening course. Copywriting and the creative process, concept development and ideation, rethoric, visual communication and stylistics.

                </div>

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">Magazine Design @ Berghs SOC</span>
                  <br />Sthlm Aug. 1999 - Jun. 2000 <br /> Full-time education. Covering magazine design, typography, journalism, art history, design history, drawing and three months industry placement.
                </div>

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">Art @ Basis</span>
                  <br />Sthlm Aug. 2001 - Jun. 2002 <br /> Full-time program.
                </div>

                <div className="bg-box--edu--contentbox">
                  <span className="edu--headline">History of Literature @ LTU</span>
                  <br />Luleå autumn 1998 <br /> Full-time program. 1F601
                </div>

              </div>
            </div>
          </div>



        </div>

      </div>
    )
  }

}

export default About
