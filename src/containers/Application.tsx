import React from "react";
import Icons from "../components/Icons/Icons";

import "./App.css";

export interface InitialProps {
  icons: object[];
}

export interface InitialState {
  value: string;
  route: string;
  icons: object[];
}

const initialState = {
  icons: [],
};

class Application extends React.Component<InitialProps, InitialState> {
  constructor(props: InitialProps) {
    super(props);
    this.state = {
      value: "",
      route: "signOut",
      icons: [
        { link: "http://placekitten.com/g/600/300", id: "1" },
        { link: "http://placekitten.com/408/287", id: "2" },
        { link: "https://placebear.com/200/300", id: "3" },
        { link: "https://placekitten.com/200/138", id: "4" },
      ],
    };
  }

  onRouteChange = (route: string) => {
    if (route === "signOut") {
      this.setState(initialState);
    }
    this.setState({ route: route });
  };

  render = () => {
    const { icons } = this.state;

    return (
      <div className="Application">
        Hello
        <main>
          <Icons icons={icons} />
        </main>
      </div>
    );
  };
}

export default Application;
