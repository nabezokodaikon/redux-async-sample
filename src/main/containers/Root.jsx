import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
// TODO: Un comment.
// import AsyncApp from "./AsyncApp";

const store = configureStore();

export default class Root extends Component {
  render() {
    // TODO: Un comment.
    // return (
      // <Provider store={store}>
        // <AsyncApp />
      // </Provider>
    // );
    return (
      <Provider store={store}>
      </Provider>
    );
  }
}
