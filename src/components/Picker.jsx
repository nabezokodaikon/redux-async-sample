import React, { Component } from "react"; 
import PropTypes from "prop-types";

export default class Picker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const value = this.props.value;
    const onChange = this.props.onChange;
    const options = this.props.options;

    return (
      <span>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => <option value={option} key={option}>{option}</option>)}
        </select>
      </span>
    );
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};