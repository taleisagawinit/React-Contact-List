import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css'
import SingleView from './singleview'
import Home from './home'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={SingleView} />
        </div>
      </Router>
    )
  }
}

export default App