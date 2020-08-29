import { connect } from "react-redux";
import React from "react";

import { fetchPoliticians } from "../../actions";
import { Politician, PoliticianModel } from "../../models/Politician";
import { StoreState } from "../../reducers";
import "./Politicians.css";

export interface PoliticianProps {
  politicians: Politician[];
  fetchPoliticians: Function;
  // deletePolitician: typeof deletePolitician;
}

export interface PoliticianState {
  politicians: Politician[];
  fetching: boolean;
}

const initialState: PoliticianState = {
  fetching: false,
  politicians: [],
};

class _PoliticiansView extends React.Component<
  PoliticianProps,
  PoliticianState
> {
  constructor(props: PoliticianProps) {
    super(props);

    this.state = initialState;
  }

  componentDidUpdate(prevProps: PoliticianProps): void {
    if (!prevProps.politicians.length && this.props.politicians.length) {
      this.setState({ fetching: false });
    }
  }

  onPoliticiansFetchClick(): void {
    this.setState({ fetching: true });
    this.props.fetchPoliticians().then((politicians: Politician[]) => {
      this.setState({ politicians: politicians });
    });
    this.setState({ fetching: false });
  }

  onPoliticianClick = (id: number): void => {
    // this.props.deletePolitician(id);
  };

  renderList(): JSX.Element[] {
    return this.props.politicians.map((politician: Politician) => {
      let id = politician.get("id") as number;
      return (
        <div className="politician" onClick={() => this.onPoliticianClick(id)}>
          <h5> Politician </h5>
          <div>Politician name: {politician.get("name")}</div>
          <div> Politician party: {politician.get("party")}</div>
          <div> Politician job: {politician.get("job")}</div>
        </div>
      );
    });
  }

  render(): JSX.Element {
    let politicianList: JSX.Element = <div></div>;
    if (!this.props.politicians || this.props.politicians.length === 0) {
      politicianList = (
        <div className="politician">
          <h5> Politician missing </h5>
        </div>
      );
    } else {
      politicianList = <div>{this.renderList()}</div>;
    }

    return (
      <div>
        <button
          className="btn"
          id="politicians"
          onClick={() => this.onPoliticiansFetchClick()}
        >
          {"Politicians"}
        </button>
        {this.state.fetching ? "Loading" : null}
        {politicianList}
      </div>
    );
  }
}

const mapStateToProps = ({
  politicians,
}: StoreState): { politicians: Politician[] } => {
  return { politicians };
};

export const PoliticiansView = connect(mapStateToProps, {
  fetchPoliticians,
  // deletePolitician,
})(_PoliticiansView);
