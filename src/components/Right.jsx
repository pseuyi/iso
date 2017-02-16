import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'
import ReactMarkdown from 'react-markdown'

export default class extends Component {
  render () {
    return (
      <div id='right' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6
        '>
        <div className='marked-top'>
          <pre>{process(marked(this.props.text))}</pre>
        </div>
        <div className='marked-bottom'>
          <ReactMarkdown source={this.props.text} />
        </div>
      </div>
    )
  }
}

function process(str) {

    var div = document.createElement('div');
    div.innerHTML = str.trim();

    return format(div, 0).innerHTML;
}

function format(node, level) {

    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter  = new Array(level - 1).join('  '),
        textNode;

    for (var i = 0; i < node.children.length; i++) {

        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);

        format(node.children[i], level);

        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }

    return node;
}
