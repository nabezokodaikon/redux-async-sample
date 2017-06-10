import React from "react";
import PropTypes from "prop-types";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.code !== "Enter") {
      return;
    }

    e.preventDefault();
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        onKeyPress={this.handleChange}
      >
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}
