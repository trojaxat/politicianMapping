import React from "react";
import "./LanguageSwitcher.css";
import { RouteComponentProps } from "react-router-dom";

export interface LanguageSwitcherState {
  language: string;
}

export interface LanguageSwitcherProps extends RouteComponentProps {
  onRouteChange: Function;
  changeUserLanguage: Function;
  getLanguageStrings: Function;
  languagesAvailable: string[];
  language: string;
}

export const languageSwitcherStrings: object = {
  en: {
    none: "None available",
    languageHeader: "Select language",
  },
  de: {
    none: "Keine zur Verfugung",
    languageHeader: "Sprache Auswahl",
  },
};

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

  componentDidUpdate(prevProps: LanguageSwitcherProps): void {}

  onLanguageChange = (event: any) => {
    this.setState({ language: event.target.value });
    this.props.changeUserLanguage(event.target.value);
  };

  render(): JSX.Element {
    const strings = this.props.getLanguageStrings(languageSwitcherStrings);
    const languagesDropDown: string[] = (this.props as any).languagesAvailable;

    let importOptions: JSX.Element[] = [<option>{strings.none}</option>];
    if (typeof languagesDropDown !== "undefined") {
      importOptions = languagesDropDown.map((language: any) => (
        <option key={language}>{language}</option>
      ));
    }

    return (
      <div>
        <strong>{strings.languageHeader}</strong>
        <select value={this.state.language} onChange={this.onLanguageChange}>
          {importOptions}
        </select>
      </div>
    );
  }
}

export default LanguageSwitcher;
