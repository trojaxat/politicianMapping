import React from "react";
import Icons from "../components/Icons/Icons";
import { Politician, PoliticianModel } from "../models/Politician";
import { User, UserProps } from "../models/User";
import PoliticianSingle from "../components/Politicians/PoliticianSingle";
import { Collection } from "../models/Collection";
import "./App.css";

export interface InitialProps {
  icons: object[] | null;
}

export interface InitialState {
  value: string;
  route: string;
  icons: object[] | null;
  politicians: Collection<Politician, PoliticianModel> | null;
  politician: Politician | null;
}

const initialState = {
  icons: null,
  politicians: null,
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
      politicians: null,
      politician: null,
    };
  }

  onRouteChange = (route: string) => {
    if (route === "signOut") {
      this.setState(initialState);
    } else if (route === "politicianList") {
      const politicianCollection = Politician.buildCollection();
      let promise = politicianCollection.fetch();
      promise.then((politician) => {
        this.setState({ politicians: politicianCollection });
      });
    } else if (route === "politician") {
      const politician = Politician.build({ id: 1 });
      politician.fetch();
      this.setState({ politician: politician });
    }

    this.setState({ route: route });
  };

  render = () => {
    const { icons, politician } = this.state;

    return (
      <div className="Application">
        Hello
        <main>
          <Icons icons={icons} />
          <PoliticianSingle politician={politician} />
          <div className="navLinks pl0">
            <button
              className="navLeft f4"
              id="home"
              onClick={() => this.onRouteChange("home")}
            >
              {"Home"}
            </button>
            <button
              className="navLeft f4"
              id="polilist"
              onClick={() => this.onRouteChange("politicianList")}
            >
              {"PoliticianList"}
            </button>
            <button
              className="navLeft f4"
              id="poli"
              onClick={() => this.onRouteChange("politician")}
            >
              {"Politician"}
            </button>
          </div>
        </main>
      </div>
    );
  };
}

export default Application;
