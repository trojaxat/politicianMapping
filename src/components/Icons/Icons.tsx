import React from "react";
import "./Icons.css";

export interface IconsProps {
  icons: object[];
}

class Icons extends React.Component {
  constructor(props: IconsProps) {
    super(props);

    this.state = {
      something: 23,
      icons: null,
    };
  }

  render(): JSX.Element {
    let icons;
    console.log(this.props.icons);
    if (icons) {
      icons = this.props.icons.foreach((icon: any) => (
        <li key={icon.id}>{icon.link}</li>
      ));
    }

    return (
      <div className="Icons br">
        <h5> Icons </h5>
        <div className="div images">{icons}</div>
      </div>
    );
  }
}

export default Icons;
