import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";

import "./styles.css";
import "./icons.ts";

const rootElement = document.getElementById("root");
render(<App />, rootElement);
