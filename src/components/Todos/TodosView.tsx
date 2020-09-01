import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { Todo, fetchTodos, deleteTodo } from "../../actions";
import { RouteComponentProps } from "react-router-dom";

import React from "react";
import "./Todos.css";

export interface TodosProps extends RouteComponentProps {
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

export interface TodosState {
  todos: Todo[];
  fetching: boolean;
}

const initialState: TodosState = {
  fetching: false,
  todos: [],
};

class _TodosView extends React.Component<TodosProps, TodosState> {
  constructor(props: TodosProps) {
    super(props);

    this.state = initialState;
  }

  componentDidUpdate(prevProps: TodosProps): void {
    // if (!prevProps.state.length && this.state.todos.length) {
    //   this.setState({ fetching: false });
    // }
  }

  onTodosFetchClick(): void {
    this.props.fetchTodos().then(() => {
      this.setState({ fetching: false });
    });
    this.setState({ fetching: true });
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.state.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <button
          className="btn"
          id="todos"
          onClick={() => this.onTodosFetchClick()}
        >
          {"Todos"}
        </button>
        {this.state.fetching ? "Loading" : null}
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const TodosView = connect(mapStateToProps, { fetchTodos, deleteTodo })(
  _TodosView
);
