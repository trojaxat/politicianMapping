import React from "react";
import "./LoginBar.css";
import { History, LocationState } from "history";
import { RouteComponentProps } from "react-router-dom";

export interface LoginBarState {}

export interface LoginBarProps extends RouteComponentProps {
  login: boolean;
  history: History<LocationState>;
  onRouteChange: Function;
}

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
    if (this.props.login) {
      return (
        <div>
          <strong>Politician Mapping</strong>
          <button
            value="logOut"
            onClick={this.onRouteButtonClick}
            id="logout_route"
          >
            {"Logout"}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <strong>Politician Mapping</strong>
          <button
            value="signIn"
            onClick={this.onRouteButtonClick}
            id="login_route"
          >
            {"Login"}
          </button>
          <button
            value="register"
            onClick={this.onRouteButtonClick}
            id="register_route"
          >
            {"Register"}
          </button>
        </div>
      );
    }
  }
}

export default LoginBar;
