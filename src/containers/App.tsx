/**
 * External imports
 */
import { connect } from "react-redux";
import Icons from "../components/Icons/Icons";
import PoliticianSingle from "../components/Politicians/PoliticianSingle";
import React from "react";
import "babel-polyfill";

/**
 * Internal imports
 */
import { Politician, PoliticianModel } from "../models/Politician";
import { StoreState } from "../reducers";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { User, UserProps } from "../models/User";
import "./App.css";

export interface InitialState {
  fetching: boolean;
  value: string;
  route: string;
  icons: object[];
  politicians?: Politician[];
}

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
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
      value: "",
      fetching: false,
      route: "signOut",
      politicians: [],
      icons: [
        { link: "http://placekitten.com/g/600/300", id: "1" },
        { link: "http://placekitten.com/408/287", id: "2" },
        { link: "https://placebear.com/200/300", id: "3" },
        { link: "https://placekitten.com/200/138", id: "4" },
      ],
    };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onButtonClick(): void {
    this.props.fetchTodos().then((): void => {
      this.setState({ fetching: false });
    });
    this.setState({ fetching: true });
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  onRouteChange = (route: string) => {
    if (route === "signOut") {
      this.setState(initialState);
    } else if (route === "politicianList") {
      const politicianCollection = Politician.buildCollection();
      let politicians = politicianCollection.fetch();
      // console.log(politicians);
      // this.setState({ politicians: politicianCollection });
    } else if (route === "politician") {
      const politician = Politician.build({ id: 1 });
      politician.fetch();
      // this.setState({ politician: politician });
    }

    this.setState({ route: route });
  };

  render = () => {
    const politicians = (this.state as any).politicians;
    const icons = (this.state as any).icons;
    const todos = (this.props as any).todos;
    const fetching = (this.state as any).fetching;

    return (
      <div className="App">
        Hello
        <main>
          <Icons {...icons} />
          <PoliticianSingle {...politicians} />
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
            <div>
              <button
                className="navLeft f4"
                id="todos"
                onClick={() => this.onButtonClick}
              >
                {"Todos"}
              </button>
              {this.state.fetching ? "Loading" : null}
              {this.renderList()}
            </div>
          </div>
        </main>
      </div>
    );
  };
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
