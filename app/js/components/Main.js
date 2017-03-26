import React, { Component } from 'react'
import Nav from './Nav'
import Spine from './Spine'
import Right from './Right'

export default class extends Component {
  render() {
    return (
      <div className="App row">
        <Nav />
        {this.props.children}
        <Spine />
        <Right />
      </div>
    )
  }
}
