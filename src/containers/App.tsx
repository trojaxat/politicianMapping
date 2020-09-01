/**
 * External imports
 */
import { connect } from "react-redux";
import React from "react";
import "babel-polyfill";

/**
 * Internal imports
 */
import Icon from "../components/Icon/Icon";
import { TodosView, TodoProps } from "../components/Todos/TodosView";
import { PoliticiansView } from "../components/Politicians/PoliticiansView";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import PoliticalInformationForm from "../components/PoliticalInformationForm/PoliticalInformationForm";
import SearchBar from "../components/SearchBar/SearchBar";
import { Politician, PoliticianModel } from "../models/Politician";
import { StoreState } from "../reducers";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { User, UserProps } from "../models/User";
import "./App.css";
import LoginBar from "../components/LoginBar/LoginBar";

export interface InitialState {
  language: string;
  login: boolean;
  user: User | null;
  role: string;
  country: string;
  route: string;
  searchTerm: string;
}

interface AppProps {
  todos?: Todo[];
  value?: string;
  route?: string;
  icons?: object[];
  politicians?: Politician[];
}

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

  render = () => {
    const politicians = (this.state as any).politicians;
    const icons = (this.state as any).icons;
    const todos = (this.props as any).todos;
    const modelOptions = ["Politician", "Party"];

    return (
      <div className="App">
        <h1>Politician Mapping</h1>
        <main>
          <LoginBar login={this.state.login} />
          <Icon {...icons} />
          <PoliticiansView {...politicians} />
          <TodosView {...todos} />
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
          <LanguageSwitcher
            changeUserLanguage={this.changeUserLanguage}
            onRouteChange={this.onRouteChange}
          />
          <SearchBar />
          <PoliticalInformationForm modelOptions={modelOptions} />
        </main>
      </div>
    );
  };
}

// const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
//   return { todos };
// };

export const App = connect()(_App);
// export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
