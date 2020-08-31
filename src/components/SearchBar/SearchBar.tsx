import React from "react";
import "./SearchBar.css";

export interface SearchBarState {
  searchTerm: string;
  result: any;
}

export interface SearchBarProps {}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchTerm: "",
      result: null,
    };
  }

  onSearchChange = (event: any) => {
    this.setState({ searchTerm: event.target.value });
  };

  onButtonSearch = () => {
    let result: any = "I dont know";
    this.setState({ result: result });
  };

  render(): JSX.Element {
    return (
      <div>
        <input
          placeholder={"Search for politician..."}
          type="text"
          onChange={this.onSearchChange}
        />
        <button onClick={this.onButtonSearch} id="submitHashtag">
          {" "}
          {"Search"}
        </button>
      </div>
    );
  }
}
export default SearchBar;
