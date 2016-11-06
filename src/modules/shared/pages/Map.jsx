import React from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import GMaps from "gmaps";

import Actions from "../state/actions";
import MAP_OPTIONS from "../model/MAP_OPTIONS";

const mapStateToProps = (state) => {
  const countries = _.values(state.shared.countries || {});
  const markers = countries.map((c) => {
    return Object.assign(c.geometry.location,{
      number:c.users
    });
  });

  return {
    countries,
    markers
  };
};

var clearMarkers = (markerObjects) => {
  _.each(markerObjects, function(m) {
    m.setMap(null);
  });
};

const styles = {
  map:{
    height: "100%",
    width: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    zIndex: 0
  }
};

class Map extends React.Component{


  constructor(props) {
    super(props);

    this.markerObjects = [];
    this.map = null;
  }

  componentDidMount(){
    this.props.dispatch(Actions.fetchCountries());
    const options = Object.assign(
      {
        el:this.refs.chart
      },
      MAP_OPTIONS
    );

    this.map = new GMaps(options);
  }

  render() {

    clearMarkers(this.markerObjects);

    _.each(this.props.markers, (m)  => {
      const markerObject = this.map.addMarker({
        lat:m.lat,
        lng:m.lng,
        animation: google.maps.Animation.DROP,
        icon: "http://chart.apis.google.com/chart?chst=d_map_spin&chld=1|0|FC4732|10|_|" + m.number,
      });

      this.markerObjects.push(markerObject);
    });

    return (
      <div style={styles.map} ref="chart">
      </div>
    );
  }
}

export default connect(mapStateToProps)(Map);
