"use strict";
exports.__esModule = true;
exports.CustomMap = void 0;
var CustomMap = /** @class */ (function () {
    function CustomMap(divId, lat, lng) {
        var mapPosition = document.getElementById(divId);
        if (mapPosition) {
            this.googleMap = new google.maps.Map(mapPosition, {
                zoom: 1,
                center: {
                    lat: lat,
                    lng: lng
                }
            });
        }
    }
    CustomMap.prototype.addMarker = function (mappable) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.lat,
                lng: mappable.lng
            }
        });
        marker.addListener("click", function () {
            var infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
