/**
 * External imports
 */
import { connect } from "react-redux";
import React from "react";
import "babel-polyfill";

/**
 * Internal imports
 */
import Icons from "../components/Icons/Icons";
import { TodosView, TodoProps } from "../components/Todos/TodosView";
import { PoliticiansView } from "../components/Politicians/PoliticiansView";
import SignIn from "../components/SignIn/SignIn";
import Register from "../components/Register/Register";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import { Politician, PoliticianModel } from "../models/Politician";
import { StoreState } from "../reducers";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { User, UserProps } from "../models/User";
import "./App.css";

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
  };

  changeUserLanguage = (language: string) => {
    this.setState({ language: language });
  };

  onRouteChange = (route: string) => {
    if (route === "home") {
      this.setState(initialState);
    } else if (route === "signIn") {
    } else if (route === "logOut") {
      this.setState({ login: false });
    } else if (route === "register") {
    } else if (route === "politician") {
    } else if (route === "politicianFilterList") {
    } else if (route === "politicianRatingList") {
    } else if (route === "addUserInformation") {
    } else if (route === "submitPoliticalInformation") {
    } else if (route === "savePoliticalInformation") {
    } else if (route === "userMapView") {
    } else {
      // this is for the language switcher to reload the page in new language
    }

    this.setState({ route: route });
  };

  render = () => {
    const politicians = (this.state as any).politicians;
    const icons = (this.state as any).icons;
    const todos = (this.props as any).todos;

    return (
      <div className="App">
        Hello
        <main>
          <Icons {...icons} />
          <PoliticiansView {...politicians} />
          <div>
            <TodosView {...todos} />
          </div>
          <div className="navLinks pl0">
            <button
              className="navLeft f4"
              id="home"
              onClick={() => this.onRouteChange("home")}
            >
              {"Home"}
            </button>
            <button
              className="navLeft f4"
              id="polilist"
              onClick={() => this.onRouteChange("politicianList")}
            >
              {"PoliticianList"}
            </button>
            <button
              className="navLeft f4"
              id="poli"
              onClick={() => this.onRouteChange("politician")}
            >
              {"Politician"}
            </button>
          </div>
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
          <LanguageSwitcher
            changeUserLanguage={this.changeUserLanguage}
            onRouteChange={this.onRouteChange}
          />
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
