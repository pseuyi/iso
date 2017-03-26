import axios from 'axios'

// state
const initialState = false

// actions
const TOGGLE = 'TOGGLE'

// action creators
export const toggle = () => ({ type: TOGGLE })

// reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return !state
    default:
       return state
  }
}
// dispatchers
export const togglePage = () => dispatch => {
  console.log('toggling page')
  dispatch(toggle())
}
