import React from "react";
import "./LoginBar.css";
import { History, LocationState } from "history";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

export interface LoginBarState {}

export interface LoginBarProps extends RouteComponentProps {
  login: boolean;
  history: History<LocationState>;
  onRouteChange: Function;
  getLanguageStrings: Function;
}

export const loginBarStrings: object = {
  en: {
    title: "Politician mapping",
    login: "Log in",
    logout: "Log out",
    register: "Register",
  },
  de: {
    title: "Politiker auskarten",
    login: "Einloggen",
    logout: "Ausloggen",
    register: "Registrieren",
  },
};

class LoginBar extends React.Component<LoginBarProps, LoginBarState> {
  constructor(props: LoginBarProps) {
    super(props);
  }

  onRouteButtonClick = (event: any) => {
    if (typeof this.props.history !== "undefined") {
      let history = this.props.history;
      let uri = "/" + event.target.value;
      history.push(uri);
      this.props.onRouteChange(event.target.value);
    }
  };

  render(): JSX.Element {
    const strings = this.props.getLanguageStrings(loginBarStrings);

    const LoginBar = styled.h1`
      display: table-cell;
      font-size: 1.5em;
      padding: 0.5rem 0px;
      margin: 0.5rem 1rem;
      border: 2px solid black;
      border-radius: 3px;
      float: left;
      text-align: center;
      color: palevioletred;
    `;

    if (this.props.login) {
      return (
        <LoginBar>
          <strong>{strings.title}</strong>
          <button
            value="logOut"
            onClick={this.onRouteButtonClick}
            id="logout_route"
          >
            {strings.logout}
          </button>
        </LoginBar>
      );
    } else {
      return (
        <LoginBar>
          <strong>{strings.title}</strong>
          <button
            value="signIn"
            onClick={this.onRouteButtonClick}
            id="login_route"
          >
            {strings.login}
          </button>
          <button
            value="register"
            onClick={this.onRouteButtonClick}
            id="register_route"
          >
            {strings.register}
          </button>
        </LoginBar>
      );
    }
  }
}

export default LoginBar;
