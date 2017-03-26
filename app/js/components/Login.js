import React from 'react'
import { connect } from'react-redux'
import { Link, browserHistory } from 'react-router'

import { setUser } from '../redux/login'
import { togglePage } from '../redux/page'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
  }
  componentDidMount () {
    const { togglePage } = this.props
    console.log('moounted')
    togglePage()
  }
  onLoginSubmit(e) {
    event.preventDefault();
    let name = e.target.name.value
    let password = e.target.password.value
    let credentials = {name, password}
    this.props.login(credentials)
  }
  render() {
    const { message } = this.props
    return (
      <div id='login' className='col-xs-6
        col-sm-6
        col-md-6
        col-lg-6'>
        <form onSubmit={this.onLoginSubmit}>
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
        <br/>
        <hr/>
        <p></p>
        <div className='centered'>
          <span>or</span>
        </div>
        <div className="buffer oauth">
          <p>
            <a target="_self"
               href="/auth/google"
               className="btn btn-social btn-google">
            <i className="fa fa-google"></i>
            <span>{message} via google</span>
            </a>
          </p>
        </div>
        <div className='centered'>
          <span>or</span>
        </div>
        <div>
          <Link to="/signup">sign up</Link>
        </div>
      </div>
    )
  }
}

const mapState = () => ({ message: 'log in' })
const mapDispatch = dispatch => ({
	login: credentials => {
		dispatch(setUser(credentials))
		browserHistory.push('/')
	},
  togglePage: togglePage
})

export default connect(mapState, mapDispatch)(Login)
