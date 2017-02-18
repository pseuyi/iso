import React, { Component } from 'react'
import Nav from './components/Nav'
import Left from './components/Left'
import Right from './components/Right'
import Spine from './components/Spine'

class App extends Component {
  render() {
    return (
      <div className="App row">
        <Nav />
        <Left />
        <Spine />
        <Right />
      </div>
    )
  }
}

export default App;
