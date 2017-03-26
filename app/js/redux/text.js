import axios from 'axios'

// state
const initialState = '# start typing in markdown_ \n## __header__ \n___\n#### sub-header \n1. words \n2. more *words*'

// actions
const SET_TEXT = 'SET_TEXT'
const SAVE = 'SAVE_TEXT'
const RESET = 'RESET'
// action creators
export const setText = text => ({ type: SET_TEXT, text })
export const save = () => ({ type: SAVE })
export const reset = () => ({ type: RESET })
// reducer
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_TEXT:
       //return Object.assign({}, state, { text: action.text })
      return action.text
    case SAVE:
      return state
    case RESET:
      return ''
    default:
       return state
  }
}
// dispatchers
export const createNote = note => dispatch => {
  console.log('creating the note in axios req', note)
  axios.post('/api/notes', note)
    .then(res => dispatch(save(res.data)))
    .catch(err => console.error('save unsuccessful'))
}
