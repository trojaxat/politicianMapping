import React from "react";
import "./Icon.css";

export interface IconProps {
  id: number;
  link: string;
  svg: any;
}

class Icon extends React.Component<IconProps, {}> {
  constructor(props: IconProps) {
    super(props);

    this.state = {
      something: 23,
      icon: null,
    };
  }

  render(): JSX.Element {
    let icon = (this.props as any).icon;
    if (icon) {
      icon = icon.foreach((icon: any) => <li key={icon.id}>{icon.link}</li>);
    }

    return (
      <div className="Icon br">
        <h5> Icon </h5>
        <div className="div images">{icon}</div>
      </div>
    );
  }
}

export default Icon;
