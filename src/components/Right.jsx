import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class extends Component {
  render () {
    return (
      <div id='right' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6
        '>
        <textarea name="text" value={this.props.text} />
      </div>
    )
  }
}
