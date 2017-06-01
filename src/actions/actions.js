"use strict";

export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const INVALIDATE_SUBREDDIT = "INVALIDTE_SUBREDDIT";
export const REQUEST_POST = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit: subreddit
  };
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit: subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit: subreddit
  };
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit: subreddit
  };
}