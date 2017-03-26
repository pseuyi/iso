import React from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from './redux/store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
// components
import Main from './components/Main'
import Left from './components/Left'
import Login from './components/Login'
import Signup from './components/Signup'
// actions
import { getUser } from './redux/login'

const Routes = ({ fetchData }) => (
  <Router history={browserHistory}>
    <Route path='/' component={Main} onEnter={fetchData}>
      <IndexRoute component={Left} />
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
    </Route>
  </Router>
)

const mapDispatch = dispatch => ({
 fetchData: () => {
    dispatch(getUser())
    //dispatch(getNotes())
  }
})

const Root = connect(null, mapDispatch)(Routes)

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
)
