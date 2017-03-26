import { combineReducers } from 'redux'
import text from './text'
import user from './login'
import page from './page'

export default combineReducers({ text, user, page })
