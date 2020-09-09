import React from "react";
import { SubFooterCss } from "./SubFooterCss";
import { RouteComponentProps } from "react-router-dom";

export interface SubFooterState {}

export interface SubFooterProps extends RouteComponentProps {}

class SubFooter extends React.Component<SubFooterProps, SubFooterState> {
  constructor(props: SubFooterProps) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <SubFooterCss>
        <h1>{"About"}</h1>
        {"Created by Daniel Axford"}
      </SubFooterCss>
    );
  }
}

export default SubFooter;
