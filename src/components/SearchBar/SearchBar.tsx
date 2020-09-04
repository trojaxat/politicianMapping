import React from "react";
import { SearchCss, SearchBarCss } from "./SearchBarCss";

export interface SearchBarState {
  searchTerm: string;
  result: any;
}

export interface SearchBarProps {
  onRouteChange: Function;
  searchTerm: Function;
}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchTerm: "",
      result: null,
    };
  }

  onSearchChange = (event: any) => {
    this.setState({ searchTerm: event.target.value });
    console.log(
      "SearchBar -> onSearchChange -> event.target.value",
      event.target.value
    );
  };

  /**
   * doesnt work yet, db not set up
   * @param string
   */
  searchTerm = (string: string) => {
    fetch("https://salty-oasis-94587.herokuapp.com/searchTerm", {
      method: "get",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchTerm: this.state.searchTerm,
      }),
    })
      .then((response) => response.json())
      .then((value) => {
        if (value.id) {
          this.setState({ result: value });
        }
      });
  };

  onButtonSearch = () => {
    if (typeof this.props.history !== "undefined") {
      let history = this.props.history;
      let uri: string = "/search" + this.state.searchTerm;
      history.push(uri);
      let result = this.searchTerm(uri);
      this.props.onRouteChange(uri);
      this.setState({ result: result });
    }
  };

  render(): JSX.Element {
    return (
      <SearchBarCss>
        <SearchCss>
          <input
            placeholder={"Search for politician..."}
            type="text"
            name="searchTerm"
            id="searchTerm"
            onChange={this.onSearchChange}
          />
          <button
            value="search"
            onClick={this.onButtonSearch}
            id="submitHashtag"
          >
            {"Search"}
          </button>
        </SearchCss>
      </SearchBarCss>
    );
  }
}

export default SearchBar;
