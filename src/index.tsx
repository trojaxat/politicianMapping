import { App } from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDom from "react-dom";
import thunk from "redux-thunk";
import "./css/styles/index.scss";
import { reducers } from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
