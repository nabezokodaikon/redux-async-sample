import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  inputUser,
  invalidateResult,
  fetchReposIfNeeded
} from "../actions";
import SearchBar from "../components/SearchBar";
import RepoList from "../components/RepoList";

class AsyncApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(user) {
    this.props.dispatch(inputUser(user));
    this.props.dispatch(invalidateResult);
    this.props.dispatch(fetchReposIfNeeded(user));
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearch={this.handleSearch}
        />
        <p>
          {
            (this.props.lastUpdated !== "") &&
              `Last updated at ${this.props.lastUpdated}.`
          }
        </p>
        <p>
          {
            (this.props.isFetching && this.props.repos.length === 0) &&
              <h2>Loading...</h2>
          }
          {
            (!this.props.isFetching && this.props.repos.length === 0) &&
              <h2>Empty</h2>
          }
          {
            (this.props.repos.length > 0) &&
              <div style={{opacity: isFetching ? 0.5 : 1}}>
                <RepoList repos={this.props.repos} />
              </div>
          }
        </p>
      </div>
    );
  }
}

AsyncApp.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })  
  ).isRequired
}

function mapStateToProps(state) {
  return {
    lastUpdated: state.lastUpdated,
    isFetching: state.isFetching,
    repos: state.repos
  };
}

export default connect(mapStateToProps)(AsyncApp);
