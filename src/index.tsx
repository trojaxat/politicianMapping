import { App } from "./containers/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDom from "react-dom";
import thunk from "redux-thunk";
import "./css/styles/index.scss";
import { reducers } from "./reducers";
import { BrowserRouter } from "react-router-dom";
import { AppCss } from "./IndexCss";

const store = createStore(reducers, applyMiddleware(thunk));

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
