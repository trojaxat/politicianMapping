import React from "react";
import "./Icons.css";
import { InitialState, InitialProps } from "../../containers/Application";

class Icons extends React.Component {
  constructor(props: InitialProps) {
    super(props);

    this.state = {
      something: 23,
      icons: null,
    };
  }

  render(): JSX.Element {
    let icons;
    icons = this.props.icons.map((icon: any) => (
      <li key={icon.id}>{icon.link}</li>
    ));

    return (
      <div className="Icons br">
        <h5> Icons </h5>
        <div className="div images">{icons}</div>
      </div>
    );
  }
}

export default Icons;
