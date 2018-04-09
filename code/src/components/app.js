import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Work from "./work/work"
import Home from "./home/home"
import About from "./about/about"
import Lab from "./lab/lab"
import "./app.css"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/lab">Lab</Link></li>
            <li><Link to="/about">Home</Link></li>
          </ul>

          <Route exact path="/" component={Home} />

        

        </div>
      </BrowserRouter>
    )
  }

}

export default App
