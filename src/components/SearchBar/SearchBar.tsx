import React from "react";
import styled from "styled-components";

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

  /**
   * this doesnt work atm due to styled components
   * @param event
   */
  onSearchChange = (event: any) => {
    this.setState({ searchTerm: event.target.value });
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
    const SearchBarCss = styled.div`
      display: table-cell;
      vertical-align: middle;
    `;

    const SearchCss = styled.div`
      font-size: 1.5em;
      margin-left: auto;
      margin-right: auto;
      border: 2px solid black;
      border-radius: 3px;
      text-align: center;
      color: palevioletred;
    `;

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
