import { combineReducers } from "redux";
import {
  INPUT_USER,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  INVALIDATE_RESULT
} from "./actionTypes";

function inputedUser(state = "", action) {
  switch (action.type) {
    case: INPUT_USER:
      return action.user;
    default:
      return state;
  }
}

function getReposByUser(state = {
  isFetching: false,
  didInvalidate: false,
  lastUpdated: "",
  errorMessage: "",
  repos: []
}, action) {
  switch (action.type) {
    case INVALIDATE_RESULT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_REPOS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: true
      });
    case RECEIVE_REPOS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.lastUpdated,
        errorMessage: action.errorMessage,
        repos: action.repos
      });
    default:
      return state;
  }
}

export default rootReducer = combineReducers({
  inputedUser,
  getReposByUser
});
