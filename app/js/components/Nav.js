import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { createNote } from '../redux/text'
import { togglePage } from '../redux/page'

class Nav extends Component {
  constructor () {
    super()
    this.newNote = this.newNote.bind(this)
  }
  newNote () {
    const title = window.prompt('what\'s the title of your note?')
    const { user, text, createNote } = this.props
    const note = {
      title: title,
      text: text,
      author_id: user.id
    }
    console.log('the note', note)
    createNote(note)
  }
  render () {
    console.log('this.props', this.props)
    const { user, text } = this.props
    return (
      <div id='nav'>
        {
          user.id? <p>welcome, {user.name.split('@')[0]}</p>: null
        }
        <Link to='login'>
          <img
            src='/images/user.png'
            alt='login button'
          />
        </Link>
        <img
          src='/images/adddoc.png'
          alt='new note button'
          onClick={this.newNote}
        />
        <img src='/images/doc.png' alt='all notes button'/>
      </div>
    )
  }
}

const mapState = state => ({ user: state.user, text: state.text })
const mapDispatch = { createNote, togglePage }

export default connect(mapState, mapDispatch)(Nav)
