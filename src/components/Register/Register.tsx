import React from "react";
import "./register.css";
import { RouteComponentProps } from "react-router-dom";

export interface RegisterState {
  registerEmail: string;
  registerPassword: string;
  registerUsername: string;
}

export interface RegisterProps extends RouteComponentProps {
  onRouteChange: Function;
  loadUser: Function;
}

class Register extends React.Component<RegisterProps, RegisterState> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      registerEmail: "",
      registerUsername: "",
      registerPassword: "",
    };
  }

  onRouteButtonClick = (event: any) => {
    if (typeof this.props.history !== "undefined") {
      let history = this.props.history;
      history.push("/signIn");
      this.props.onRouteChange(event.target.value);
    }
  };

  onUsernameChange = (event: any) => {
    this.setState({ registerUsername: event.target.value });
  };

  onEmailChange = (event: any) => {
    this.setState({ registerEmail: event.target.value });
  };

  onPasswordChange = (event: any) => {
    this.setState({ registerPassword: event.target.value });
  };

  onSubmitRegister = (event: any) => {
    fetch("https://salty-oasis-94587.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.registerEmail,
        username: this.state.registerUsername,
        password: this.state.registerPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user[0] === this.state.registerEmail) {
          // this needs to add user into the app state
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        }
      })
      .catch((err) => {
        console.log("register not successful");
      });
  };

  render() {
    return (
      <div>
        <fieldset id="sign_up">
          <legend>Register</legend>
          <div>
            <label htmlFor="user-name">Username</label>
            <input
              type="username"
              name="username"
              id="username"
              onChange={this.onUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="email-address">Email</label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              onChange={this.onEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.onPasswordChange}
            />
          </div>
        </fieldset>
        <div>
          <input
            type="submit"
            value="Register"
            onClick={this.onSubmitRegister}
          />

          <div>
            <button value="signIn" onClick={this.onRouteButtonClick}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
