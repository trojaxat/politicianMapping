import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { Todo, fetchTodos, deleteTodo } from "../../actions";
import React from "react";
import "./Todos.css";

export interface TodoProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

export interface TodoState {
  todos: Todo[];
  fetching: boolean;
}

const initialState: TodoState = {
  fetching: false,
  todos: [],
};

class _TodosView extends React.Component<TodoProps, TodoState> {
  constructor(props: TodoProps) {
    super(props);

    this.state = initialState;
  }

  componentDidUpdate(prevProps: TodoProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
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
    return this.props.todos.map((todo: Todo) => {
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
