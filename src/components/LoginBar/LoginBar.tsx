import React from "react";
import "./LoginBar.css";

export interface LoginBarState {
  route: string;
}

export interface LoginBarProps {
  login: boolean;
}

class LoginBar extends React.Component<LoginBarProps, LoginBarState> {
  constructor(props: LoginBarProps) {
    super(props);
    this.state = {
      route: "",
    };
  }

  onLoginClick = (event: any) => {
    this.setState({ route: event.target.value });
  };

  onLogoutClick = (event: any) => {
    this.setState({ route: event.target.value });
  };

  onRegisterClick = (event: any) => {
    this.setState({ route: event.target.value });
  };

  render(): JSX.Element {
    console.log("render -> const", this.props.login);

    if (this.props.login) {
      return (
        <div>
          <strong>Politician Mapping</strong>
          <button onClick={this.onRegisterClick} id="logout_route">
            {"Logout"}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <strong>Politician Mapping</strong>
          <button onClick={this.onLoginClick} id="login_route">
            {"Login"}
          </button>
          <button onClick={this.onRegisterClick} id="register_route">
            {"Register"}
          </button>
        </div>
      );
    }
  }
}
export default LoginBar;
