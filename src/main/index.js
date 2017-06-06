// "use strict";

import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import Root from "../build/containers/Root"

render(
  <Root />,
  document.getElementById("root")
);
