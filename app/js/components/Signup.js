import React from 'react';
import { connect } from'react-redux';
import { browserHistory } from 'react-router';
import { signup } from '../redux/signup'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }
  onSignupSubmit(e) {
    e.preventDefault()
    let name = e.target.name.value
    let password = e.target.password.value
    let credentials = {name, password}
    this.props.signup(credentials)
  }
  render() {
    const { message } = this.props
    return (
      <div id="signup" className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6'>
        <form onSubmit={this.onSignupSubmit}>
          <div className="form-group">
            <label>email </label>
            <input
              name="name"
              type="name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>password </label>
            <input
              name="password"
              type="password"
              className="form-control"
              required
            />
          </div>
          <button type="submit">{message}</button>
        </form>
      </div>
    )
  }
}

const mapState = () => ({ message: 'sign up' })
const mapDispatch = dispatch => ({
  signup: userinfo => {
    dispatch(signup(userinfo))
    browserHistory.push('/')
  }
})

export default connect(mapState, mapDispatch)(Signup)
