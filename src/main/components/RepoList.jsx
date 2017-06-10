import React from "react";
import PropTypes from "prop-types";

export default class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          this.props.repos.map((repo, i) => {
            return (
              <li key={i}>
                <a href={repo.url}>{repo.name}</a>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })  
  ).isRequired
};
