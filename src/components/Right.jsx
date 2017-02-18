import React, { Component } from 'react'
import { connect } from 'react-redux'

import marked from 'marked'
import ReactMarkdown from 'react-markdown'
import comb from '../js/utils.js'

class Right extends Component {
  render () {
    return (
      <div id='right' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6
        '>
        <div className='marked-top'>
          <pre>{comb(marked(this.props.text))}</pre>
        </div>
        <div className='marked-bottom'>
          <ReactMarkdown source={this.props.text} />
        </div>
      </div>
    )
  }
}

const mapState = state => ({ text: state.text })
// const mapDispatch = dispatch => ({
// 	write: text => dispatch(setText(text))
// })
export default connect(mapState, null)(Right)
