import React from "react";
import "./LanguageSwitcher.css";
import { RouteComponentProps } from "react-router-dom";

export interface LanguageSwitcherState {
  language: string;
}

export interface LanguageSwitcherProps extends RouteComponentProps {
  onRouteChange: Function;
  changeUserLanguage: Function;
}

class LanguageSwitcher extends React.Component<
  LanguageSwitcherProps,
  LanguageSwitcherState
> {
  constructor(props: LanguageSwitcherProps) {
    super(props);
    this.state = {
      language: "",
    };
  }

  onLanguageChange = (event: any) => {
    this.setState({ language: event.target.value });
  };

  render(): JSX.Element {
    return (
      <div>
        <fieldset id="language">
          Language
          <div>
            <label htmlFor="language">Language</label>
            <input
              type="language"
              name="language"
              id="language"
              //   onChange={this.props.changeUserLanguage()}
            />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default LanguageSwitcher;
