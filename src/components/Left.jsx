import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setText } from '../redux/root-reducer'

class Left extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.props.write(e.target.value)
    // console.log('this.props.text from mapped state', this.props)
  }
  render () {
    return (
      <div id='left' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6'>
        <textarea name="text" defaultValue='# start typing in markdown_
## __header__
___
#### sub-header
1. words
2. more *words*
'       onChange={this.handleChange} />
      </div>
    )
  }
}

const mapState = state => ({ text: state.text })
const mapDispatch = dispatch => ({
	write: text => dispatch(setText(text))
})
export default connect(mapState, mapDispatch)(Left)
