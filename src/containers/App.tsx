/**
 * External imports
 */
import { connect } from "react-redux";
import React from "react";
import "babel-polyfill";
import history from "../history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { languageStrings } from "../language/languageStrings";

/**
 * Internal imports
 */
import Icon from "../components/Icon/Icon";
import { TodosView, TodosProps } from "../components/Todos/TodosView";
import { PoliticiansView } from "../components/Politicians/PoliticiansView";
import SignIn, { SignInProps } from "../components/SignIn/SignIn";
import Register, { RegisterProps } from "../components/Register/Register";
import LanguageSwitcher, {
  LanguageSwitcherProps,
} from "../components/LanguageSwitcher/LanguageSwitcher";
import PoliticalInformationForm, {
  PoliticalInformationFormProps,
} from "../components/PoliticalInformationForm/PoliticalInformationForm";
import SearchBar, { SearchBarProps } from "../components/SearchBar/SearchBar";
import { Politician, PoliticianModel } from "../models/Politician";
import { StoreState } from "../reducers";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { User, UserProps } from "../models/User";
import LoginBar, { LoginBarProps } from "../components/LoginBar/LoginBar";
import "./App.css";

export interface InitialState {
  language: string;
  login: boolean;
  user: User | null;
  role: string;
  country: string;
  route: string;
  searchTerm: string;
  todos?: Todo[];
  icons?: object[];
  politicians?: Politician[];
}

interface AppProps {}

const initialState = {};
class _App extends React.Component<AppProps, InitialState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      language: "it",
      login: false,
      user: null,
      role: "",
      country: "germany",
      route: "home",
      searchTerm: "",
    };
  }

  componentDidUpdate(prevProps: AppProps): void {}

  loadUser = (user: User) => {
    this.setState({ user: user });
    this.setState({ login: true });
  };

  changeUserLanguage = (language: string) => {
    this.setState({ language: language });
  };

  onRouteChange = (route: string) => {
    switch (route) {
      case "home": {
        //statements;
        this.setState(initialState);
        break;
      }
      case "signIn": {
        if (this.state.user) {
          this.setState({ login: true });
        }
        //statements;
        break;
      }
      case "logOut": {
        //statements;
        this.setState({ user: null });
        this.setState({ login: false });
        break;
      }
      case "register": {
        //statements;
        break;
      }
      case "politician": {
        //statements;
        break;
      }
      case "politicianFilterList": {
        //statements;
        break;
      }
      case "addUserInformation": {
        //statements;
        break;
      }
      case "submitPoliticalInformation": {
        //statements;
        break;
      }
      case "savePoliticalInformation": {
        //statements;
        break;
      }
      case "userMapView": {
        //statements;
        break;
      }
      default: {
        //statements;
        // this is for the language switcher to reload the page in new language
        break;
      }
    }
    this.setState({ route: route });
  };

  getLanguageStrings = (stringObject: object) => {
    let strings = languageStrings(stringObject, this.state.language);
    let returnedString = [strings[this.state.language]][0];

    if (typeof returnedString === "undefined") {
      returnedString = [strings["en"]][0];
    }
    return returnedString;
  };

  render(): JSX.Element {
    const politicians = (this.state as any).politicians;
    const icons = (this.state as any).icons;
    const todos = (this.state as any).todos;
    const modelOptions = ["Politician", "Party"];
    const languagesAvailable = ["en", "de", "it"];

    return (
      <Router>
        <Route
          path="/"
          component={(props: LanguageSwitcherProps) => (
            <LanguageSwitcher
              {...props}
              languagesAvailable={languagesAvailable}
              language={this.state.language}
              getLanguageStrings={this.getLanguageStrings}
              changeUserLanguage={this.changeUserLanguage}
              onRouteChange={this.onRouteChange}
            />
          )}
        />
        <Route
          path="/"
          component={(props: LoginBarProps) => (
            <LoginBar
              {...props}
              login={this.state.login}
              onRouteChange={this.onRouteChange}
              getLanguageStrings={this.getLanguageStrings}
            />
          )}
        />

        <Switch>
          <Route
            exact
            path="/"
            component={(props: SearchBarProps) => <SearchBar {...props} />}
          />
          <Route
            path="/search"
            component={(props: SearchBarProps) => <SearchBar {...props} />}
          />
        </Switch>

        <Route
          path="/search/politicians"
          component={PoliticiansView}
          {...politicians}
        />

        <Switch>
          <Route
            exact
            path="/signIn"
            component={(props: SignInProps) => (
              <SignIn
                {...props}
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange}
              />
            )}
          />
          <Route
            path="/register"
            component={(props: RegisterProps) => (
              <Register
                {...props}
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange}
              />
            )}
          />
        </Switch>

        <Route
          path="/addPoliticalInfo"
          component={(props: PoliticalInformationFormProps) => (
            <PoliticalInformationForm {...props} modelOptions={modelOptions} />
          )}
        />

        <Route path="/icons" component={Icon} {...icons} />
        <Route
          path="/todos"
          component={(props: TodosProps) => <TodosView {...props} />}
        />
      </Router>
    );
  }
}

// const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
//   return { todos };
// };

export const App = connect()(_App);

// export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
