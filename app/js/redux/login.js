import axios from 'axios';

//state
const initialState = {}
// actions
const SET_CURRENT_USER = 'SET_CURRENT_USER'
const RESET_USER = 'RESET_USER'
// action creators
export const set  = user => ({ type: SET_CURRENT_USER, user })
const reset = () => ({ type: RESET_USER })
// reducer
export default function reducer (currentUser = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    case RESET_USER:
      return {}
    default:
      return currentUser;
    }
}
// dispatchers
export const setUser = (credentials) => dispatch => {
  axios.post('/auth/login', credentials)
     .then(res => {
       console.log('res.data', res.data)
       dispatch(set(res.data))
     })
}
export const getUser = () => dispatch => {
  console.log('looking for logged in user')
  axios.get('/auth/me')
    .then(res => {
      console.log('res.data for getUser', res.data)
      dispatch(set(res.data))
    })
    .catch(err => console.error('retrieveLoggedInUser unsuccesful', err));
}

export const logout = () => dispatch => {
  dispatch(reset())
  axios.get('/auth/logout')
     .catch(err => console.error('logout unsuccessful', err))
}
