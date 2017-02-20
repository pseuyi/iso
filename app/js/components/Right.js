import React, { Component } from 'react'
import { connect } from 'react-redux'

import marked from 'marked'
import ReactMarkdown from 'react-markdown'
import spruce from '../utils'

class Right extends Component {

  render () {
    console.log('this.props.text', this.props)
    // var input = '# This is a header\n\nAnd this is a paragraph';
    return (
      <div id='right' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6
        '>
        <div className='marked-top'>
          <pre>{spruce(marked(this.props.text))}</pre>
        </div>
        <div className='marked-bottom'>
          <ReactMarkdown source={this.props.text} />
        </div>
      </div>
    )
  }
}

const mapState = state => ({ text: state.text })
export default connect(mapState, null)(Right)
