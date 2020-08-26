import React from "react";
import { Politician, PoliticianModel } from "../models/Politician";
import "./Politicians.css";

class PoliticianSingle extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      politician: null,
      model: null,
    };
  }

  render(): JSX.Element {
    console.log(this.props.politician);
    const { politician } = this.props;
    console.log(politician);
    // let politicianModel = politician as Politician;

    if (politician) {
      return (
        <div className="politician">
          <h5> Politician </h5>
          <div>Politician name: {politician.get("name")}</div>
          <div> Politician party: {politician.get("party")}</div>
          <div> Politician job: {politician.get("job")}</div>
        </div>
      );
    } else {
      return (
        <div className="politician">
          <h5> Politician missing </h5>
        </div>
      );
    }
  }
}

export default PoliticianSingle;
