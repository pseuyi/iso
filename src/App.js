import React, { Component } from 'react'
import './App.css'
import Left from './components/Left'
import Right from './components/Right'
import Spine from './components/Spine'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.write = this.write.bind(this)
  }
  write (text) {
    this.setState({text})
  }
  render() {
    return (
      <div className="App row">
        <Left text={this.state.text} write={this.write}/>
        <Spine />
        <Right text={this.state.text} write={this.write}/>
      </div>
    );
  }
}

export default App;
