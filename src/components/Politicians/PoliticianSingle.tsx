import React from "react";
import { Politician, PoliticianModel } from "../../models/Politician";
import "./Politicians.css";

interface PoliticianSingleInterface {
  politicians?: Politician[];
}
class PoliticianSingle extends React.Component {
  constructor(props: PoliticianSingleInterface) {
    super(props);

    this.state = {
      politician: null,
      model: null,
    };
  }

  render(): JSX.Element {
    const politicians = (this.props as any).politicians;
    console.log(politicians);

    if (politicians) {
      let jsx: string = "";
      politicians.forEach((politician: Politician) => {
        jsx =
          jsx +
          `<div className="politician">
          <h5> Politician </h5>
          <div>Politician name: {politician.get("name")}</div>
          <div> Politician party: {politician.get("party")}</div>
          <div> Politician job: {politician.get("job")}</div>
        </div>`;
      });
      return (jsx as unknown) as JSX.Element;
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
