import * as keys from '../keys/users.key';

const initialState = {user: []};
export default (state = initialState, action) => {
  switch (action.type) {
    case keys.FETCH_USERS_PENDING:
      return {
        ...state,
        error: action.payload,
        fetching: true,
      };
    case keys.FETCH_USERS_FULFILLED:
      return {
        ...state,
        users: action.payload,
        fetching: false,
      };
    case keys.FETCH_USERS_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };

    default:
      return state;
  }
};
