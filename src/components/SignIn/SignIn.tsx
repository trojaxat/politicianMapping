import React from "react";
import "./SignIn.css";
import { RouteComponentProps } from "react-router-dom";

export interface SignInState {
  signInEmail: string;
  signInPassword: string;
}

export interface SignInProps extends RouteComponentProps {
  onRouteChange: Function;
  loadUser: Function;
}

class SignIn extends React.Component<SignInProps, SignInState> {
  constructor(props: SignInProps) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event: any) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event: any) => {
    this.setState({ signInPassword: event.target.value });
  };

  onRouteButtonClick = (event: any) => {
    if (typeof this.props.history !== "undefined") {
      let history = this.props.history;
      history.push("/register");
      this.props.onRouteChange(event.target.value);
    }
  };

  onSubmitSignIn = () => {
    fetch("https://salty-oasis-94587.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.email) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
          let history = this.props.history;
          history.push("/home");
        }
      });
  };

  render(): JSX.Element {
    return (
      <div>
        <fieldset id="sign_up">
          Sign In
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
          <input type="submit" value="Sign In" onClick={this.onSubmitSignIn} />
        </div>
        <div>
          <button value="register" onClick={this.onRouteButtonClick}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;
