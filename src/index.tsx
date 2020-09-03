import { App } from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDom from "react-dom";
import thunk from "redux-thunk";
import "./css/styles/index.scss";
import { reducers } from "./reducers";
import { Router, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const store = createStore(reducers, applyMiddleware(thunk));
const AppCss = styled.div``;

ReactDom.render(
  <Provider store={store}>
    <AppCss>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppCss>
  </Provider>,
  document.getElementById("root")
);
