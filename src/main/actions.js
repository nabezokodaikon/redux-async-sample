import GitHub from "github-api";
import {
  REQUEST_REPOS,
  RECEIVE_REPOS
} from "./actionTypes";

function requestRepos() {
  return {
    type: REQUEST_REPOS
  };
}

function receiveRepos(res) {
  return {
    type: RECEIVE_REPOS,
    res
  };
}

function fetchRepos(user) {
  return dispatch => {
    dispatch(requestRepos());
    const gh = new GitHub();
    const search = gh.search();
    search.forRepositories({
      q: `user:${user}`,
      sort: "created",
      order: "asc"
    }, (error, result, request) => {
      const res = { error, repos: result };
      dispatch(receiveRepos(res));
    });
  }
}

function shouldFetchRepos(state) {
  if (state.isFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchReposIfNeeded(user) {
  return (dispatch, getState) => {
    if (shouldFetchRepos(getState())) {
      return dispatch(fetchRepos(user));
    } else {
      return null;
    }
  };
}
