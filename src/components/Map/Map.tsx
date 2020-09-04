import React from "react";
import { MapCss } from "./MapCss";
import { History, LocationState } from "history";
import { RouteComponentProps } from "react-router-dom";
import {
  MapsComponent,
  LayersDirective,
  NavigationLineDirective,
  LayerDirective,
  MarkersDirective,
  NavigationLine,
  NavigationLinesDirective,
  MarkerDirective,
  Marker,
  Inject,
} from "@syncfusion/ej2-react-maps";

export interface MapState {
  center: { position: Mappable };
  zoomFactor: number;
}

export interface Mappable {
  lat: number;
  lng: number;
  markerContent: string;
}

export interface MapProps extends RouteComponentProps {
  history: History<LocationState>;
  getLanguageStrings: Function;
}

export const mapStrings: object = {
  en: {
    title: "Map",
  },
  de: {
    title: "Karte",
  },
};

class Map extends React.Component<MapProps, MapState> {
  constructor(props: MapProps) {
    super(props);

    this.state = {
      zoomFactor: 4,
      center: {
        position: {
          lng: 29.394708,
          lat: -94.954653,
          markerContent: this.markerContent("start"),
        },
      },
    };
  }

  markerContent(value: string): string {
    return `marker:` + value;
  }

  onRouteButtonClick = (event: any) => {
    if (typeof this.props.history !== "undefined") {
      let history = this.props.history;
      let uri = "/" + event.target.value;
      history.push(uri);
    }
  };

  // addMarker = (mappable: Mappable): void => {
  //   let lat = this.state.position.lat;
  //   let lng = this.state.position.lng;
  //   const marker = new google.maps.Marker({
  //     map: this.map,
  //     position: {
  //       lat: lat,
  //       lng: lng,
  //     },
  //   });

  //   marker.addListener("click", () => {
  //     const infoWindow = new google.maps.InfoWindow({
  //       content: mappable.markerContent(),
  //     });

  //     infoWindow.open(this.map, marker);
  //   });
  // };

  render(): JSX.Element {
    const strings = this.props.getLanguageStrings(mapStrings);

    return (
      <MapCss>
        <strong>{strings.title}</strong>
        <MapsComponent
          id="maps"
          zoomSettings={{ zoomFactor: this.state.zoomFactor }}
          centerPosition={{
            latitude: this.state.center.position.lat,
            longitude: this.state.center.lng,
          }}
        >
          <Inject services={[Marker, NavigationLine]} />
          <LayersDirective>
            <LayerDirective layerType="OSM">
              <MarkersDirective>
                <MarkerDirective
                  visible={true}
                  height={25}
                  width={15}
                  dataSource={[
                    {
                      latitude: 34.06062,
                      longitude: -118.330491,
                      name: "California",
                    },
                    {
                      latitude: 40.724546,
                      longitude: -73.850344,
                      name: "New York",
                    },
                  ]}
                ></MarkerDirective>
              </MarkersDirective>
            </LayerDirective>
          </LayersDirective>
        </MapsComponent>
      </MapCss>
    );
  }
}

export default Map;
