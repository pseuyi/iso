import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const NEW_USER = 'NEW_USER'

/* ------------   ACTION CREATORS     ------------------ */

import {set} from './login'

/* ------------       REDUCER     ------------------ */

// export default function reducer (currentUser = {}, action) {
//   switch (action.type) {
//     case NEW_USER:
//       return action.user
//     default:
//       return currentUser
//     }
// }

/* ------------       DISPATCHERS     ------------------ */

export const signup = credentials => dispatch => {
  axios.post('/auth/signup', credentials)
       .then(res => dispatch(set(res.data)))
       .catch(err => console.error('Signup unsuccessful', err))
}
