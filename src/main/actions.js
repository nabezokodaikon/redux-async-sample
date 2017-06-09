import github from "octonode";
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
  const lastUpdated = new Date(Date.now()).toLocaleTimeString();
  const errorMessage = (res.err !== null) ? res.err.message : "";
  const repos = res.data.items.map(a => {
    return {
      name: a.name,
      url: a.html_url
    }; 
  });
  return {
    type: RECEIVE_REPOS,
    lastUpdated,
    errorMessage,
    repos
  };
}

function fetchRepos(user) {
  return dispatch => {
    dispatch(requestRepos());
    const client = github.client();
    const search = client.search();
    search.repos({
      q: `user:${user}`,
      sort: "created",
      order: "asc"
    }, (err, data, headers) => {
      const res = { err, data };
      dispatch(receiveRepos(res));
    });
  }
}

function shouldFetchRepos(state, user) {
  const data = state.getReposByUser(user);
  if (data.isFetching) {
    return false;
  } else {
    return data.didInvalidate;
  }
}

export function fetchReposIfNeeded(user) {
  return (dispatch, getState) => {
    if (shouldFetchRepos(getState(), user)) {
      return dispatch(fetchRepos(user));
    } else {
      return null;
    }
  };
}
