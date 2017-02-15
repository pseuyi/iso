import React, { Component } from 'react'
import { connect } from 'react-redux'
var marked = require('marked');
var ReactMarkdown = require('react-markdown');

export default class extends Component {
  render () {
    let text = marked(this.props.text)
    return (
      <div id='right' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6
        '>
        <div className='marked'>
          {marked(this.props.text)}
        </div>
        <div className='marked'>
          <ReactMarkdown source={this.props.text} />
        </div>
      </div>
    )
  }
}

// <textarea name="text" value={this.props.text} />
