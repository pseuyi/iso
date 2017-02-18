import React, { Component } from 'react'
import { connect } from 'react-redux'

import marked from 'marked'
import ReactMarkdown from 'react-markdown'

class Right extends Component {

  render () {
    var input = '# This is a header\n\nAnd this is a paragraph';
    return (
      <div id='right' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6
        '>
        <div className='marked-top'>
          <pre>{prettify(marked(this.props.text))}</pre>
        </div>
        <div className='marked-bottom'>
          <ReactMarkdown source={this.props.text} />
        </div>
      </div>
    )
  }
}

function prettify(str) {
    let temp = document.createElement('div')
    temp.innerHTML = str.trim()
    return format(temp, 0).innerHTML
}

function format (node, level) {

  let indent = '\n'
  for(var j=level; j>0; j--) {
    indent += ' '
  }
  // console.log('the current level', level)
  // console.log('formatting', node)
  for (var i = 0; i< node.children.length; i++) {
    let textnode = document.createTextNode(indent)
    node.insertBefore(textnode, node.children[i])
    format(node.children[i], level+1)
    if (i===node.children.length-1) {
      let last = document.createTextNode(indent.slice(0, indent.length-1))
      node.appendChild(last)
    }
  }
  return node
}

const mapState = state => ({ text: state.text })
// const mapDispatch = dispatch => ({
// 	write: text => dispatch(setText(text))
// })
export default connect(mapState, null)(Right)
