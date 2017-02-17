const SET_TEXT = 'SET_TEXT'

export const write = text => ({ type: SET_TEXT, text})

export default function reducer (state = {}, action) {
  switch (action.type) {
    case SET_TEXT:
       return action.text
    default:
       return state
  }
}
