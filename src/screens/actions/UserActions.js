import { FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS } from "./UserActionTypes";
import { NetworkHandler } from "../../util/NetworkHandler";
import { USERS } from "../../util/NetworkConstants";

export const fetchUsers = () => {
  return dispatch => {
    dispatch({
      type: FETCH_USERS
    });

    NetworkHandler.get(`${USERS}`)
    .then(userResponse => {
      console.log('this is the response for the users: ', userResponse);
      if (userResponse.status === 200) {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: userResponse.data.data
        });
      } else {
        dispatch({
          type: FETCH_USERS_FAIL,
          payload: 'Unable to fetch, server error'
        });
      }
    })
    .catch(error => {
      console.log('unable to fetch users: ', error);
      dispatch({
        type: FETCH_USERS_FAIL,
        payload: 'Unable to fetch, network error'
      });
    });
  }
}