import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class extends Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.clearContents = this.clearContents.bind(this)
  }
  clearContents () {
    this.value = 'nothing'
  }
  handleChange (e) {
    this.props.write(e.target.value)
  }
  render () {
    return (
      <div id='left' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6'>
        <textarea name="text" defaultValue='start typing in markdown _' onFocus={this.clearContents} onChange={this.handleChange} />
      </div>
    )
  }
}
// const mapState = (state) => (state)
// const mapDispatch = dispatch => ({
// 	login: credentials => {
// 		dispatch(setUser(credentials));
// 		browserHistory.push('/');
// 	}
// })
// export default connect(mapState, mapDispatch)(Left);
