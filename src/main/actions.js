import GitHub from "github-api";
import {
  INPUT_USER,
  REQUEST_REPOS,
  RECEIVE_REPOS,
  INVALIDATE_RESULT
} from "./actionTypes";

export function inputUser(user) {
  return {
    type: INPUT_USER,
    user: user
  };
}

export function invalidateResult() {
  return {
    type: INVALIDATE_RESULT
  };
}

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
    }, (err, data, headers) => {
      const res = { err, data };
      dispatch(receiveRepos(res));
    });
  }
}

function shouldFetchRepos(state) {
  if (state.isFetching) {
    return false;
  } else {
    return state.didInvalidate;
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
