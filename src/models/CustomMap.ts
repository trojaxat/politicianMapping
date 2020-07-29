// To be able to be shown on the map needs to satisfy these criteria
export interface Mappable {
  lat: number;
  lng: number;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string, lat: number, lng: number) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat,
        lng,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
