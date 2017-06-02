import React, { Component } from "react"; 
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from "../actions";
import Picker from "../components/Picker";
import Posts from "../components/Posts";

class AsyncApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const dispatch = this.props.dispatch;
    const selectedSubreddit = this.props.selectedSubreddit;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const dispatch = this.props.dispatch;
      const selectedSubreddit = this.props.selectedSubreddit;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit));
    this.props.dispatch(fetchPostsIfNeeded(nextSubreddit));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const dispatch = this.props.dispatch;
    const selectedSubreddit = this.props.selectedSubreddit;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
    const selectedSubreddit = this.props.selectedSubreddit;
    const posts = this.props.posts;
    const isFetching = this.props.isFetching;
    const lastUpdated = this.props.lastUpdated;
    return (
      <div>
        <Picker 
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={["reactjs", "frontend"]}
        />
        <p>
          {
            (lastUpdated) &&
              <span>
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                {" "}
              </span>
          }
          {
            (!isFetching) &&
              <a href="#" onClick={this.handleRefreshClick}>
                Refresh
              </a>
          }
        </p>
          {
            (isFetching && posts.length === 0) &&
              <h2>Loading...</h2>
          }
          {
            (!isFetching && posts.length === 0) &&
              <h2>Empty.</h2>
          }
          {
            (posts.length > 0) &&
              <div style={{ opacity: isFetching ? 0.5 : 1}}>
                <Posts posts={posts} />
              </div>
          }
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const selectedSubreddit = state.selectedSubreddit;
  const postsBySubreddit = state.postsBySubreddit;
  const {
    isFetching: isFetching,
    lastUpdated: lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] ||
    {
      isFetching: true,
      items: []
    };

  return {
    selectedSubreddit: selectedSubreddit,
    posts: posts,
    isFetching: isFetching,
    lastUpdated: lastUpdated
  }; 
}

export default connect(mapStateToProps)(AsyncApp);
