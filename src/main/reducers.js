import { combineReducers } from "redux";
import {
  INPUT_USER,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  INVALIDATE_RESULT
} from "./actionTypes";

function inputedUser(state = "", action) {
  switch (action.type) {
    case INPUT_USER:
      return action.user;
    default:
      return state;
  }
}

function repos(state = {
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
      const lastUpdated = new Date(Date.now()).toLocaleTimeString();
      const errorMessage = (action.res.err !== null) ? action.res.err.message : "";
      const repos = action.res.data.items.map(a => {
        return {
          name: a.name,
          url: a.html_url
        }; 
      });
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated,
        errorMessage,
        repos
      });
    default:
      return state;
  }
}

export default rootReducer = combineReducers({
  inputedUser,
  getReposByUser
});
