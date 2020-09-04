import React from "react";
import { LoginBarCss } from "./LoginBarCss";
import { History, LocationState } from "history";
import { RouteComponentProps } from "react-router-dom";

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

    if (this.props.login) {
      return (
        <LoginBarCss>
          <strong>{strings.title}</strong>
          <button
            value="logOut"
            onClick={this.onRouteButtonClick}
            id="logout_route"
          >
            {strings.logout}
          </button>
        </LoginBarCss>
      );
    } else {
      return (
        <LoginBarCss>
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
        </LoginBarCss>
      );
    }
  }
}

export default LoginBar;
