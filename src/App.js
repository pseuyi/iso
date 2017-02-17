import React, { Component } from 'react'
import './App.css'
import Left from './components/Left'
import Right from './components/Right'
import Spine from './components/Spine'
import marked from 'marked'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: '# start typing in markdown_ \n## __header__ \n1. words \n2. more *words*'
    }
    this.write = this.write.bind(this)
  }
  write (text) {
    let mtext = marked(text)
    this.setState({text: mtext})
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
