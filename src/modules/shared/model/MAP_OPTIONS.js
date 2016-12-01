const MAP_OPTIONS = {
    lat:48.79170682091098,
    lng:14.517354749999996,
    draggable: true,
    zoom:4,
    minZoom: 4,
    maxZoom: 10,
    disableDefaultUI: true,
    panControl: false,
    scaleControl: false,
    rotateControl: false,
    streetViewControl: false,
    zoomControl: true,
    zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
        style: window.google.maps.ZoomControlStyle.LARGE
    }
};

export default MAP_OPTIONS;
