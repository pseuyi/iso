import { combineReducers } from 'redux';
import text from './text';
import user from './user';

export default combineReducers({ text, user });