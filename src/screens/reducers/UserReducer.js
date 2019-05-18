import constants from "../../util/constants";
import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL } from "../actions/UserActionTypes";

const INITIAL_STATE = {
  viewType: constants.VIEW_TYPE.PROGRESS_VIEW,
  users: []
};

export default (state = INITIAL_STATE, action) => {
  let newState = state;
  switch(action.type) {
    case FETCH_USERS:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.PROGRESS_VIEW
      };
      break;
    case FETCH_USERS_SUCCESS:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.MAIN_VIEW,
        users: action.payload
      };
      break;
    case FETCH_USERS_FAIL:
      newState = {
        ...state,
        viewType: constants.VIEW_TYPE.ERROR_VIEW
      };
      break;
    default:
        newState = state;
  }
  return newState;
} 