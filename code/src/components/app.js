import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Work from "./work/work"
import About from "./about/about"
import Home from "./home/home"
import Lab from "./lab/lab"
import anna from "../images/anna.jpg"
import "./app.css"

class App extends React.Component {


  //window.scrollTo!!!

  render() {
    return (
      <BrowserRouter>
        <div className="home-container">


          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />

          <div className="nav-links-container">
            <div className="navlink-txt"><Link to="/work">Work</Link></div>
            <div className="navlink-txt"><Link to="/about">About</Link></div>
            <div className="navlink-txt"><Link to="/lab">Lab</Link></div>
          </div>

        </div>
      </BrowserRouter>
    )
  }

}

export default App
