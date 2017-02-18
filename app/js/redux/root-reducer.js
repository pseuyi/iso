// state
const initialState = {
  text: '# start typing in markdown_ \n## __header__ \n___\n#### sub-header \n1. words \n2. more *words*'
}
// actions
const SET_TEXT = 'SET_TEXT'
// action creators
export const setText = text => ({ type: SET_TEXT, text})
// reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_TEXT:
       return Object.assign({}, state, { text: action.text })
    default:
       return state
  }
}
