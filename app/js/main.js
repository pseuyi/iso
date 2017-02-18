import React, { Component } from 'react'
import Nav from './components/Nav'
import Left from './components/Left'
import Spine from './components/Spine'
import Right from './components/Right'

export default class extends Component {
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
