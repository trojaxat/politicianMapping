import React from "react";
import "./LoginBar.css";
import { RouteComponentProps } from "react-router-dom";

export interface LoginBarState {
  route: string;
}

export interface LoginBarProps extends RouteComponentProps {
  login: boolean;
  onRouteChange: Function;
}

class LoginBar extends React.Component<LoginBarProps, LoginBarState> {
  constructor(props: LoginBarProps) {
    super(props);
    this.state = {
      route: "",
    };
  }

  onRouteButtonClick = (event: any) => {
    let history = this.props.history;
    history.push("/login");
    this.setState({ route: event.target.value });
    this.props.onRouteChange(event.target.value);
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
