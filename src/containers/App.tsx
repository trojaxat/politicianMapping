/**
 * External imports
 */
import { connect } from "react-redux";
import React from "react";
import "babel-polyfill";
import history from "../history";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
      language: "en_GB",
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
        console.log("Signed in clicked");
        this.setState({ login: true });
        //statements;
        break;
      }
      case "logOut": {
        //statements;
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

  render(): JSX.Element {
    const politicians = (this.state as any).politicians;
    const icons = (this.state as any).icons;
    const todos = (this.state as any).todos;
    const modelOptions = ["Politician", "Party"];

    return (
      <Router>
        <Switch>
          <Route
            path="/"
            component={(props: LoginBarProps) => (
              <LoginBar
                {...props}
                login={this.state.login}
                onRouteChange={this.onRouteChange}
              />
            )}
          />
          <Route
            path="/"
            component={(props: LanguageSwitcherProps) => (
              <LanguageSwitcher
                {...props}
                changeUserLanguage={this.changeUserLanguage}
                onRouteChange={this.onRouteChange}
              />
            )}
          />
          <Route
            path="/"
            component={(props: SearchBarProps) => <SearchBar {...props} />}
          />
          <Route path="/" component={PoliticiansView} {...politicians} />

          <Route
            path="/politicians"
            component={PoliticiansView}
            {...politicians}
          />

          <Route
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

          <Route
            path="/addPoliticalInfo"
            component={(props: PoliticalInformationFormProps) => (
              <PoliticalInformationForm
                {...props}
                modelOptions={modelOptions}
              />
            )}
          />

          <Route path="/icons" component={Icon} {...icons} />
          <Route
            path="/todos"
            ccomponent={(props: TodosProps) => <TodosView {...props} />}
          />
        </Switch>
      </Router>
    );
  }
}

// const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
//   return { todos };
// };

export const App = connect()(_App);

// export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
