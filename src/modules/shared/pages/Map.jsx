import React from "react";
import { connect } from 'react-redux';
import Actions from "../state/actions";
import _ from 'lodash';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const mapStateToProps = (state) => {
  return {
    countries:_.values(state.shared.countries || {})
  };
};

class MapPage extends React.Component{

  componentDidMount(){
    this.props.dispatch(Actions.fetchCountries());
  }

  render() {

    const position = [51.505, -0.09];
    return (
      <Map center={position} zoom={13}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default connect(mapStateToProps)(MapPage);
