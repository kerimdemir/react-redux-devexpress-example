import * as keys from '../keys/users.key';
import ApiService from '../../services/ApiService';

export const fetchUsers = () => dispatch => {
  dispatch({
    type: keys.FETCH_USERS_PENDING,
    payload: '',
  });
  ApiService.getUsers()
    .then(response => {
      dispatch({
        type: keys.FETCH_USERS_FULFILLED,
        payload: response.data,
      });
    })
    .catch(error => {
      dispatch({
        type: keys.FETCH_USERS_REJECTED,
        payload: error,
      });
    });
};
