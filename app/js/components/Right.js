import React, { Component } from 'react'
import { connect } from 'react-redux'

import marked from 'marked'
import ReactMarkdown from 'react-markdown'
import spruce from '../utils'

class Right extends Component {
  render () {
    // var input = '# This is a header\n\nAnd this is a paragraph';
    const { page } = this.props
    const text = page? '' : this.props.text
    return (
      <div id='right' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6
        '>
        <div className='marked-top'>
          <pre>{spruce(marked(text))}</pre>
        </div>
        <div className='marked-bottom'>
          <ReactMarkdown source={text} />
        </div>
      </div>
    )
  }
}

const mapState = state => ({ text: state.text })
export default connect(mapState, null)(Right)
