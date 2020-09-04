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

export interface MapState {}

export interface Mappable {
  position: {
    lat: number;
    lng: number;
  };
  zoomFactor: number;
  markerContent?: string;
}

export interface MapProps extends RouteComponentProps {
  mappable: Mappable;
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

    let lat = this.props.mappable.position.lat;
    console.log("Map -> lat", lat);
    let lng = this.props.mappable.position.lng;
    console.log("Map -> lng", lng);
    let zoomFactor = this.props.mappable.zoomFactor;
    console.log("Map -> zoomFactor", zoomFactor);

    return (
      <MapCss>
        <strong>{strings.title}</strong>
        <MapsComponent
          id="maps"
          zoomSettings={{ zoomFactor: 4 }}
          centerPosition={{
            latitude: -30,
            longitude: 95,
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
              <NavigationLinesDirective>
                <NavigationLineDirective
                  visible={true}
                  latitude={[34.06062, 40.724546]}
                  longitude={[-118.330491, -73.850344]}
                  color="blue"
                  angle={90}
                  width={5}
                />
              </NavigationLinesDirective>
            </LayerDirective>
          </LayersDirective>
        </MapsComponent>
      </MapCss>
    );
  }
}

export default Map;
