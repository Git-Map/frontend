import React from "react";
import { connect } from 'react-redux';
import _ from 'lodash';
import GMaps from "gmaps";

import Actions from "../state/actions";
import MAP_OPTIONS from "../model/MAP_OPTIONS";

const mapStateToProps = (state) => {
  return {
    countries:_.values(state.shared.countries || {})
  };
};

var styles = {
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

    const countries = this.props.countries.map((country,index) => {
      return (
        <p key={index}>{country.name} - {country.users}</p>
      );
    });

    return (
      <div style={styles.map} ref="chart">
      </div>
    );
  }
}

export default connect(mapStateToProps)(Map);
