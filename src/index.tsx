import { App } from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDom from "react-dom";
import thunk from "redux-thunk";
import "./css/styles/index.scss";
import { reducers } from "./reducers";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router";

const store = createStore(reducers, applyMiddleware(thunk));
const history = createBrowserHistory();

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
