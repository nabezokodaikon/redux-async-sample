import { combineReducers } from "redux";
import {
  REQUEST_REPOS,
  RECEIVE_REPOS
} from "./actionTypes";

function repos(state = {
  isFetching: false,
  lastUpdated: "",
  errorMessage: "",
  repos: []
}, action) {
  switch (action.type) {
    case REQUEST_REPOS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_REPOS:
      const lastUpdated = new Date(Date.now()).toLocaleTimeString();
      if (action.res.error) {
        return Object.assign({}, state, {
          isFetching: false,
          lastUpdated,
          errorMessage: action.res.error,
          repos: []
        });
      } else {
        const repos = action.res.repos.map(a => {
          return {
            name: a.name,
            url: a.html_url
          }; 
        });
        return Object.assign({}, state, {
          isFetching: false,
          lastUpdated,
          errorMessage: "",
          repos
        });
      }
    default:
      return state;
  }
}

const rootReducer = repos;
export default rootReducer;
